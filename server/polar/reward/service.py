from typing import List, Sequence, Tuple
from uuid import UUID

import structlog
from sqlalchemy import and_
from sqlalchemy.orm import (
    joinedload,
)

from polar.models.issue import Issue
from polar.models.issue_reward import IssueReward
from polar.models.pledge import Pledge
from polar.models.pledge_transaction import PledgeTransaction
from polar.models.repository import Repository
from polar.pledge.schemas import PledgeTransactionType
from polar.postgres import AsyncSession, sql

log = structlog.get_logger()


class RewardService:
    async def list(
        self,
        session: AsyncSession,
        org_id: UUID | None = None,
        issue_id: UUID | None = None,
    ) -> Sequence[Tuple[Pledge, IssueReward, PledgeTransaction]]:
        statement = (
            sql.select(Pledge, IssueReward, PledgeTransaction)
            .join(Pledge.issue)
            .join(IssueReward, Issue.id == IssueReward.issue_id)
            .join(
                PledgeTransaction,
                and_(
                    PledgeTransaction.pledge_id == Pledge.id,
                    PledgeTransaction.issue_reward_id == IssueReward.id,
                    PledgeTransaction.type == PledgeTransactionType.transfer,
                ),
                isouter=True,
            )
        )

        if org_id:
            statement = statement.where(Pledge.organization_id == org_id)

        if issue_id:
            statement = statement.where(Pledge.issue_id == issue_id)

        statement = statement.options(
            joinedload(IssueReward.user),
            joinedload(IssueReward.organization),
            joinedload(Pledge.issue)
            .joinedload(Issue.repository)
            .joinedload(Repository.organization),
            joinedload(Pledge.by_organization),
            joinedload(Pledge.user),
        )

        res = await session.execute(statement)
        rows = res.unique().all()

        return [r._tuple() for r in rows]

    async def get(
        self,
        session: AsyncSession,
        pledge_id: UUID,
        issue_reward_id: UUID,
    ) -> Tuple[Pledge, IssueReward, PledgeTransaction] | None:
        statement = (
            sql.select(Pledge, IssueReward, PledgeTransaction)
            .join(Pledge.issue)
            .join(IssueReward, Issue.id == IssueReward.issue_id)
            .join(
                PledgeTransaction,
                and_(
                    PledgeTransaction.pledge_id == Pledge.id,
                    PledgeTransaction.issue_reward_id == IssueReward.id,
                    PledgeTransaction.type == PledgeTransactionType.transfer,
                ),
                isouter=True,
            )
        )

        statement = statement.where(
            Pledge.id == pledge_id, IssueReward.id == issue_reward_id
        )

        statement = statement.options(
            joinedload(IssueReward.user),
            joinedload(IssueReward.organization),
            joinedload(Pledge.issue)
            .joinedload(Issue.repository)
            .joinedload(Repository.organization),
            joinedload(Pledge.by_organization),
            joinedload(Pledge.user),
        )

        res = await session.execute(statement)

        r = res.unique().one_or_none()

        if r:
            return r._tuple()

        return None


reward_service = RewardService()
