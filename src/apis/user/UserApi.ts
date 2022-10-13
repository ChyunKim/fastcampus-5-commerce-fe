import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import { UserSocialLoginParamType } from './UserApi.type';

export class UserApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  postSocialLogin = async (
    body: UserSocialLoginParamType,
  ): Promise<UserSocialLoginParamType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/social_login/`,
      data: body,
    });
    return data;
  };
}

const userApi = new UserApi();

export default userApi;
