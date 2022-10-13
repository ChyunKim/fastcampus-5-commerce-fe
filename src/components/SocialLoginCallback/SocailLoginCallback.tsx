import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { usePostSocialLoginMutation } from '@apis/user/UserApi.mutation';

const SocialLoginCallback = () => {
  const router = useRouter();

  const { mutateAsync } = usePostSocialLoginMutation();

  const { code, state } = router.query;
  useEffect(() => {
    if (typeof code === 'string' && typeof state === 'string') {
      mutateAsync({ code: code, state: state })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  }, [code]);

  return <></>;
};

export default SocialLoginCallback;
function postSocialLogin() {
  throw new Error('Function not implemented.');
}
