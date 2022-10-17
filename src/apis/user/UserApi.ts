import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  UserMeParamType,
  UserMeReturnType,
  UserRefreshParamType,
  UserRefreshReturnType,
  UserRegisterParamType,
  UserRegisterReturnType,
  UserSocialLoginParamType,
  UserSocialLoginReturnType,
} from './UserApi.type';

export class UserApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  postSocialLogin = async (
    body: UserSocialLoginParamType,
  ): Promise<UserSocialLoginReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/social_login/`,
      data: body,
    });
    return data;
  };

  postRegister = async (
    body: UserRegisterParamType,
  ): Promise<UserRegisterReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/register/`,
      data: body,
    });
    return data;
  };

  postRefresh = async (
    body: UserRefreshParamType,
  ): Promise<UserRefreshReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/refresh/`,
      data: body,
    });
    return data;
  };

  getUserMe = async (params: UserMeParamType): Promise<UserMeReturnType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/user/me/`,
      headers: {
        Authorization: `Bearer ${params.accessToken}`,
      },
    });
    return data;
  };
}

const userApi = new UserApi();

export default userApi;
