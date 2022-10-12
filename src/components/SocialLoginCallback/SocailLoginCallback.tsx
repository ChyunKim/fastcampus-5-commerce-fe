import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { loginapi } from '@utils/api/login';

const SocialLoginCallback = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      loginapi
        .post('/v1/user/social_login/', {
          code: router.query.code,
          state: router.query.state,
        })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.response));
    }
  });

  return <></>;
};

export default SocialLoginCallback;
