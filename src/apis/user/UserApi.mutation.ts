import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import userApi from './UserApi';
import {
  UserDTOType,
  UserParamPatchType,
  UserParamPutType,
} from './UserApi.type';

export const USER_API_MUTATION_KEY = {
  POST: (param?: UserDTOType) => ['user-post', param],
  PUT: (req?: UserParamPutType) => ['user-put', req],
  PATCH: (req?: UserParamPatchType) => ['user-patch', req],
  DELETE: (id?: string) => ['user-delete', id],
};

export const usePostSocialLoginMutation = (
  params?: MutationHookParams<typeof userApi.postSocialLogin>,
) => {
  return useMutation(userApi.postSocialLogin, {
    ...params?.options,
  });
};
