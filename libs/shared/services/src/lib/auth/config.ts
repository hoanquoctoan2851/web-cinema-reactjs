export interface IAuthConfig {
  loginEndpoint: string;
  registerEndpoint: string;
  userInfoEndpoint: string;
  verifyAccountEndpoint: string;
  resetPasswordEndpoint: string;
  refreshEndpoint: string;
  forgotEndpoint: string;
  logoutEndpoint: string;
  tokenType: string;
  storageTokenKeyName: string;
  storageRefreshTokenKeyName: string;
}

const AuthConfig: IAuthConfig = {
  // Endpoints
  loginEndpoint: '/auth/login',
  registerEndpoint: '/auth/register',
  userInfoEndpoint: '/auth/me',
  verifyAccountEndpoint: '/auth/verify',
  resetPasswordEndpoint: '/auth/change-password',
  refreshEndpoint: '/auth/refreshToken',
  forgotEndpoint: '/auth/forgot-password',
  logoutEndpoint: '/auth/logout-account',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}

export default AuthConfig
