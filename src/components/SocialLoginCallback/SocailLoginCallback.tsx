import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { usePostSocialLoginMutation } from '@apis/user/UserApi.mutation';

const SocialLoginCallback = () => {
  const router = useRouter();

  const data = {
    code: router.query.code,
    state: router.query.state,
  };
  useEffect(() => {
    if (router.query) {
    }
  });

  return <></>;
};

export default SocialLoginCallback;
function postSocialLogin() {
  throw new Error('Function not implemented.');
}
