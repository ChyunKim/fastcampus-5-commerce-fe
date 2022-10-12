import Head from 'next/head';

import SocialLoginCallback from '@components/SocialLoginCallback';

const Callback = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | ...확인중</title>
      </Head>
      <SocialLoginCallback />
    </>
  );
};

export default Callback;
