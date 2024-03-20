"""Add unique constraint on SubscriptionBenefitGrant

Revision ID: 9c4291360071
Revises: 2b1a16d5661f
Create Date: 2024-03-20 13:34:57.757751

"""
import sqlalchemy as sa
from alembic import op

# Polar Custom Imports
from polar.kit.extensions.sqlalchemy import PostgresUUID

# revision identifiers, used by Alembic.
revision = "9c4291360071"
down_revision = "2b1a16d5661f"
branch_labels: tuple[str] | None = None
depends_on: tuple[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(
        op.f(
            "subscription_benefit_grants_subscription_id_user_id_subscription_benefit_id_key"
        ),
        "subscription_benefit_grants",
        ["subscription_id", "user_id", "subscription_benefit_id"],
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(
        op.f(
            "subscription_benefit_grants_subscription_id_user_id_subscription_benefit_id_key"
        ),
        "subscription_benefit_grants",
        type_="unique",
    )
    # ### end Alembic commands ###
