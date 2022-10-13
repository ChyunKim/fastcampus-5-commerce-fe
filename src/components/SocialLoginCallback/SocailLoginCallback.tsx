import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SocialLoginCallback = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
    }
  });

  return <></>;
};

export default SocialLoginCallback;
