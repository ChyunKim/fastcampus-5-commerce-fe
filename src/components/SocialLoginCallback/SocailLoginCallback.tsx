import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { usePostSocialLoginMutation } from '@apis/user/UserApi.mutation';

import { ROUTES } from '@constants/routes';

const SocialLoginCallback = () => {
  const router = useRouter();
  const { mutateAsync: socialLogin } = usePostSocialLoginMutation();
  const { code, state } = router.query;

  useEffect(() => {
    if (typeof code === 'string' && typeof state === 'string') {
      socialLogin({ code: code, state: state })
        .then((res) => {
          if (res.isRegister) router.push(ROUTES.HOME);
          else {
            console.log(res.socialToken);
            router.push(`${ROUTES.LOGIN.SIGNUP}`);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [code]);

  return <></>;
};

export default SocialLoginCallback;
