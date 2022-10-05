import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import ProductListPage from '@components/ProductListPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

import { productApi } from '@utils/api/commerce';

const ProductList: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  return (
    <>
      <Head>
        <title>INCOUSERUN | 상품보기</title>
      </Head>
      <HomeLayout
        content={<ProductListPage list={props.productlist.results} />}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let page = 100;
  const res = await productApi.list(page);
  const productlist = res.data;

  return {
    props: { productlist },
  };
};
export default ProductList;
