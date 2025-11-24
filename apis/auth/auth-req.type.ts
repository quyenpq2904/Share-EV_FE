interface ILoginRequest {
  email: string;
  password: string;
}

interface IRefreshTokenRequest {
  refreshToken: string;
}

export type { ILoginRequest, IRefreshTokenRequest };
