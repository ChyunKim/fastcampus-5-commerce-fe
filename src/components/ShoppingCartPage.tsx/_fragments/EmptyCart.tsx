import Link from 'next/link';

import { Box, Button, Heading } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

const EmptyCart = () => {
  return (
    <Box m="180px 0 80px" textAlign="center">
      <Heading variant="title">
        장바구니가 비어있습니다.
        <br />
        상품을 추가해보세요!
      </Heading>
      <Link href={ROUTES.PRODUCT.MAIN}>
        <Button variant="orange" w="180px" m="30px 0">
          상품보러가기
        </Button>
      </Link>
    </Box>
  );
};

export default EmptyCart;
