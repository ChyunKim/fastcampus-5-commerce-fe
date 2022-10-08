import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import axios from 'axios';

import { CONFIG } from '@config';

import { SOCIAL } from '@constants/social';

const SignupCallback = () => {
  const router = useRouter();

  const { code, state } = router.query;
  //code, restApiKey, _redirect_uri를 다시 카카오 api에게 POST요청을 보내준다
  console.log(code, state);
  const SOCIAL_REDIRECT_URL = `${CONFIG.DOMAIN}`;

  React.useEffect(() => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/authorize?response_type=${code}&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}`,
        {
          headers: {
            'Content-type': 'application/json',
            withCredentials: true,
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      .then((response) => {
        console.log('response:', response);
      })
      .catch((err) => {
        console.log('error:', err);
      });
  }, [code]);

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>INCOUSERUN | ...확인중</title>
      </Head>
    </>
  );
};

export default SignupCallback;
