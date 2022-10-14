import Head from 'next/head';
import React from 'react';

import OrderListPage from '@components/MyAccoutPage/_fragments/OrderListPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const Order = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 주문결제</title>
      </Head>
      <HomeLayout content={<OrderListPage />} />
    </>
  );
};

export default Order;
