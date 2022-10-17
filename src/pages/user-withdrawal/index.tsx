import Head from 'next/head';
import React from 'react';

import UserWithdrawalPage from '@components/UserWithdrawalPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const UserWithdrawal = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 회원탈퇴</title>
      </Head>
      <HomeLayout content={<UserWithdrawalPage />} />
    </>
  );
};

export default UserWithdrawal;
