import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';

import { PRODUCTSLICE_PROPS } from '@features/reducer/slice/productSlice';

import HomePage from '@components/HomePage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

import { reviewApi } from '@utils/api/commerce';

interface STOREPROPS {
  product: PRODUCTSLICE_PROPS;
}
const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  console.log(props.reviewlist);
  const product = useSelector((state: STOREPROPS) => state.product);

  console.log(product);
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>INCOUSERUN | 메인</title>
      </Head>
      <HomeLayout content={<HomePage list={props.reviewlist} />} />
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await reviewApi.list();
  const reviewlist = res.data;

  return {
    props: { reviewlist },
  };
};
export default Home;
