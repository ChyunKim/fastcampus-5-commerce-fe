import Head from 'next/head';
import React from 'react';

import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import NumberBox from '@components/common/@Layout/ProductLayout/NumberBox';

import {
  ChekedBoxIcon,
  ProductPlusIcon,
  XIcon,
} from 'generated/icons/CustomIcon';
import { ProductimgIcon } from 'generated/icons/MyIcons';

const CartCard = () => {
  return (
    <Container p="20px 0" m="10px 0">
      <Flex mb="15px">
        <ChekedBoxIcon />
        <ProductimgIcon boxSize={90} mr="10px" />
        <Box w="100%">
          <Heading variant="title">바스 & 샴푸</Heading>
          <Text fontSize="16px" color="gray.400">
            바스 & 샴푸 | 120ml
          </Text>
          <Heading variant="title" color="primary.500">
            27,000원
          </Heading>
        </Box>
        <XIcon />
      </Flex>
      <Box w="313px">
        <NumberBox />
      </Box>
      <Box w="313px" m="0 auto">
        <Flex justifyContent="space-between" p="15px 0">
          <Text fontSize="16px">배송비 무료</Text>
          <Heading variant="titlelarge">54,000원</Heading>
        </Flex>
      </Box>
    </Container>
  );
};

export default CartCard;
