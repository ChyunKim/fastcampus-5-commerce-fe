import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import OrderCompletePage from '@components/OrderCompletePage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const OrderComplete = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>INCOUSERUN | 주문완료</title>
      </Head>
      <HomeLayout content={<OrderCompletePage />} />
    </>
  );
};

export default OrderComplete;
