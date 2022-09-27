import Head from 'next/head';
import React from 'react';

import ProductDetailPage from '@components/ProductDetailPage.tsx';
import HomeLayout from '@components/common/@Layout/HomeLayout';

const ProductDetail = () => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 상품보기</title>
      </Head>
      <HomeLayout content={<ProductDetailPage />} />
    </>
  );
};

export default ProductDetail;
