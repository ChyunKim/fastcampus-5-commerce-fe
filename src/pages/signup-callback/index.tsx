import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { loginapi } from '@utils/api/login';

const SignupCallback = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const data = {
        code: router.query.code,
        state: router.query.state,
      };

      console.log(data);
      loginapi
        .post('/v1/user/social_login/', data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response));
    }
  });

  return (
    <>
      <Head>
        <title>INCOUSERUN | ...확인중</title>
      </Head>
    </>
  );
};

export default SignupCallback;
