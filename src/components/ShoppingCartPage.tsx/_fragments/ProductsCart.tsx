import { Container, Flex, HStack, Text } from '@chakra-ui/react';

import CartCard from './CartCard';

import { CheckBoxIcon } from 'generated/icons/CustomIcon';

const ProductsCart = () => {
  return (
    <Container mt="80px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="10px 0"
        mb="10px"
      >
        <HStack>
          <CheckBoxIcon boxSize={5} />
          <Text color="gray.600">모두선택</Text>
        </HStack>
        <Text color="gray.600">선택삭제</Text>
      </Flex>
      <CartCard />
    </Container>
  );
};

export default ProductsCart;
