from polar.config import settings

from .sub_type import SubType

CLIENT_ID_PREFIX = "payflow_ci_"
CLIENT_SECRET_PREFIX = "payflow_cs_"
CLIENT_REGISTRATION_TOKEN_PREFIX = "payflow_crt_"
AUTHORIZATION_CODE_PREFIX = "payflow_ac_"
ACCESS_TOKEN_PREFIX: dict[SubType, str] = {
    SubType.user: "payflow_at_u_",
    SubType.organization: "payflow_at_o_",
}
REFRESH_TOKEN_PREFIX: dict[SubType, str] = {
    SubType.user: "payflow_rt_u_",
    SubType.organization: "payflow_rt_o_",
}

ISSUER = "https://payflow.dev"
SERVICE_DOCUMENTATION = "https://payflow.dev/docs"
SUBJECT_TYPES_SUPPORTED = ["public"]
ID_TOKEN_SIGNING_ALG_VALUES_SUPPORTED = ["RS256"]
CLAIMS_SUPPORTED = ["sub", "name", "email", "email_verified"]

JWT_CONFIG = {
    "key": settings.JWKS.find_by_kid(settings.CURRENT_JWK_KID),
    "alg": "RS256",
    "iss": ISSUER,
    "exp": 3600,
}
