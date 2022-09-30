import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import OrderPage from '@components/OrderPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const OrderProduct = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>INCOUSERUN | 주문결제</title>
      </Head>
      <HomeLayout content={<OrderPage />} />
    </>
  );
};

export default OrderProduct;
