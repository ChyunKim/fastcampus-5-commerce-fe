import Head from 'next/head';
import { useRouter } from 'next/router';

const SignupCallback = () => {
  const router = useRouter();

  const { code, state } = router.query;
  //code, restApiKey, _redirect_uri를 다시 카카오 api에게 POST요청을 보내준다
  console.log(code, state);

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>INCOUSERUN | ...확인중</title>
      </Head>
    </>
  );
};

export default SignupCallback;
