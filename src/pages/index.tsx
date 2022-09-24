import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import HomePage from '@components/HomePage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>INCOUSERUN | 메인</title>
      </Head>
      <HomeLayout content={<HomePage />} />
    </>
  );
}

export default Home;
