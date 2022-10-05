import Head from 'next/head';
import React from 'react';

import OrderListPage from '@components/MyAccoutPage/_fragments/OrderListPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const MyAccount = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 회원정보수정</title>
      </Head>
      <HomeLayout content={<OrderListPage />} />
    </>
  );
};

export default MyAccount;
