import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React from 'react';

import ProductDetailPage from '@components/ProductDetailPage.tsx';
import HomeLayout from '@components/common/@Layout/HomeLayout';

import { productApi } from '@utils/api/commerce';

const ProductDetail = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  console.log(props.productDetail);
  return (
    <>
      <Head>
        <title>INCOUSERUN | 상품보기</title>
      </Head>
      <HomeLayout content={<ProductDetailPage />} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  const id = Number(props.query.id);

  const res = await productApi.detail(id);
  const productDetail = res.data;

  return {
    props: { productDetail },
  };
};

export default ProductDetail;
