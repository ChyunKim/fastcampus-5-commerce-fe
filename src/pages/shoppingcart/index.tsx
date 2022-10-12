import Head from 'next/head';
import React from 'react';

import ShoppingCartPage from '@components/ShoppingCartPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const ProductList = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 장바구니</title>
      </Head>
      <HomeLayout content={<ShoppingCartPage />} />
    </>
  );
};

export default ProductList;
