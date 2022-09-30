import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';

import CartCard from './CartCard';

import { CheckBoxIcon } from 'generated/icons/CustomIcon';

const ProductsCart = () => {
  return (
    <Container mt="80px" mb="50px">
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
      <CartCard />
      <Box>
        <Flex
          fontSize="16px"
          color="gray.600"
          justifyContent="space-between"
          m="10px 0"
        >
          <Text>총 상품금액</Text>
          <Text>108,000 원</Text>
        </Flex>
        <Flex
          fontSize="16px"
          color="gray.600"
          justifyContent="space-between"
          m="10px 0"
        >
          <Text>총 배송비</Text>
          <Text>0 원</Text>
        </Flex>
        <Box
          border="1px solid"
          borderColor="gray.200"
          m="20px 0"
          bg="gray.200"
          h="0px"
        />
        <Flex fontSize="16px" justifyContent="space-between" m="10px 0">
          <Text>결제금액</Text>
          <Heading variant="title" color="primary.500">
            108,000원
          </Heading>
        </Flex>
        <Button variant="orange" m="20px 0">
          결제하기
        </Button>
      </Box>
    </Container>
  );
};

export default ProductsCart;
