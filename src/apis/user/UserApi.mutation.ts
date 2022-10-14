import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import userApi from './UserApi';

export const usePostSocialLoginMutation = (
  params?: MutationHookParams<typeof userApi.postSocialLogin>,
) => {
  return useMutation(userApi.postSocialLogin, {
    ...params?.options,
  });
};

export const usePostRegisterMutation = (
  params?: MutationHookParams<typeof userApi.postRegister>,
) => {
  return useMutation(userApi.postRegister, {
    ...params?.options,
  });
};

export const usePostRefreshMutation = (
  params?: MutationHookParams<typeof userApi.postRefresh>,
) => {
  return useMutation(userApi.postRefresh, {
    ...params?.options,
  });
};
