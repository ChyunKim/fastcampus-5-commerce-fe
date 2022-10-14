import Head from 'next/head';
import React from 'react';

import EditUserInfoPage from '@components/MyAccoutPage/_fragments/EditUserInfoPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const UserModify = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 회원정보수정</title>
      </Head>
      <HomeLayout content={<EditUserInfoPage />} />
    </>
  );
};

export default UserModify;
