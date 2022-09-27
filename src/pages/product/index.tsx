import Head from 'next/head';
import React from 'react';

import ProductListPage from '@components/ProductListPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const ProductList = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 상품보기</title>
      </Head>
      <HomeLayout content={<ProductListPage />} />
    </>
  );
};

export default ProductList;
