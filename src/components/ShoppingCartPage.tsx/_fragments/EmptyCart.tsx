import { Box, Button, Heading } from '@chakra-ui/react';

const EmptyCart = () => {
  return (
    <Box m="180px 0 80px" textAlign="center">
      <Heading variant="title">
        장바구니가 비어있습니다.
        <br />
        상품을 추가해보세요!
      </Heading>
      <Button variant="orange" w="180px" m="30px 0">
        상품보러가기
      </Button>
    </Box>
  );
};

export default EmptyCart;
