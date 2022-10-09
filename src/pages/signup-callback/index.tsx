import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { loginapi } from '@utils/api/login';

const SignupCallback = () => {
  const router = useRouter();

  const { code, state } = router.query;
  console.log(code, state);

  const data = { code, state };
  useEffect(() => {
    loginapi
      .post('/v1/user/social_login/', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
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
