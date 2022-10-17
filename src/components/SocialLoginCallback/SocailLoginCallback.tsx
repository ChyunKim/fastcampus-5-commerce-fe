import { useRouter } from 'next/router';
import { useEffect } from 'react';

import {
  usePostRefreshMutation,
  usePostSocialLoginMutation,
} from '@apis/user/UserApi.mutation';

import { ROUTES } from '@constants/routes';
import { setToken } from '@utils/localStorage/token';

const SocialLoginCallback = () => {
  const router = useRouter();
  const { mutateAsync: socialLogin } = usePostSocialLoginMutation();
  const { mutateAsync: tokenRefresh } = usePostRefreshMutation();
  const { code, state } = router.query;

  useEffect(() => {
    if (typeof code === 'string' && typeof state === 'string') {
      socialLogin({ code: code, state: state })
        .then((res) => {
          if (res.isRegister) {
            const { access, refresh } = res;
            if (access && refresh) {
              setToken({ access: access, refresh: refresh, isRegister: true });
              router.push(ROUTES.HOME);
            }
          } else {
            router.push(
              `${ROUTES.LOGIN.SIGNUP}?socialToken=${res.socialToken}`,
            );
          }
        })
        .catch((error) => console.log(error));
    }
  }, [code]);

  return <></>;
};

export default SocialLoginCallback;
