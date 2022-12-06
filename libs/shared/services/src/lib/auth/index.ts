import authConfig, { IAuthConfig } from './config'
import axiosIns from './axiosIns'
import { AxiosInstance } from 'axios'
import { responseResult, responseError } from '@hotato/shared/utils'
interface IAuthContructor {
  axiosInsOverride?: AxiosInstance;
  jwtOverrideConfig?: IAuthConfig;
}

interface ICredential {
  username: string;
  password: string;
}

class AuthService {
  axiosIns: AxiosInstance = axiosIns
  jwtConfig: IAuthConfig = { ...authConfig }

  // For Refreshing Token
  isAlreadyFetchingAccessToken = false

  // is process call refresh
  isProcessRefreshToken = false

  // For Refreshing Token
  subscribers = []

  constructor({axiosInsOverride, jwtOverrideConfig}: IAuthContructor) {
    if (axiosInsOverride) {
      this.axiosIns = axiosInsOverride
    }
    if (jwtOverrideConfig) {
      this.jwtConfig = jwtOverrideConfig
    }
  }

  async login(credentials: ICredential) {
    try {
      const response = await this.axiosIns.post(this.jwtConfig.loginEndpoint, credentials)
      return responseResult(response)
    } catch (error) {
      console.log('Auth login error ==> ', error);
      return responseError(error)
    }
  }

  async logout() {
    try {
      const response = await this.axiosIns.delete(this.jwtConfig.logoutEndpoint)
      return responseResult(response)
    } catch (error) {
      console.log('Auth logout error ==> ', error);
      return responseError(error)
    }
  }

  async getUserInfo() {
    try {
      const res = await this.axiosIns.get(this.jwtConfig.userInfoEndpoint)
      return responseResult(res)
    } catch (error) {
      console.log('Auth getUserInfo error ==> ', error);
      return responseError(error)
    }
  }
}

export const authService = new AuthService({})