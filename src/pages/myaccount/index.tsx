import Head from 'next/head';
import React from 'react';

import MyAccountPage from '@components/MyAccoutPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const MyAccount = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 마이페이지</title>
      </Head>
      <HomeLayout content={<MyAccountPage />} />
    </>
  );
};

export default MyAccount;
