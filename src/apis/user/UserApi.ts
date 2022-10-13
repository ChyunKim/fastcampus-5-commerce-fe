import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import { UserDTOType } from './UserApi.type';

export class UserApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  postSocialLogin = async (body: UserDTOType): Promise<UserDTOType> => {
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
