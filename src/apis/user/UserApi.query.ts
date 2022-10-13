import { UserParamGetType } from './UserApi.type';

export const USER_API_QUERY_KEY = {
  GET: (param?: UserParamGetType) => ['user-list', param],
  GET_BY_ID: (id?: string) => ['user-by-id', id],
};
