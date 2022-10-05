import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { MY_IMAGES } from '@image';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import ProductDrawer from '@components/ProductDetailPage.tsx/_fragments/ProductDrawer';

import { ROUTES } from '@constants/routes';

import { ProductComProps, ProductlistProps } from '../ProduceListPage';

import { RadiostarIcon } from 'generated/icons/CustomIcon';

interface tagProps {
  id: number;
  name: string;
}
const ProductCard = (props: ProductComProps) => {
  const router = useRouter();
  const { onOpen, isOpen, onClose } = useDisclosure();

  const productlist = props.list.map((ele: ProductlistProps) => {
    const price = String(ele.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const rank = ele.avgRate ? Number(ele.avgRate.toFixed(1)) : 0;
    return (
      <Container
        w="343px"
        h="528px"
        p="0"
        borderRadius="20px"
        boxShadow="0 0px 10px 0 #1A1A1A20"
        mb="30px"
        key={ele.id}
      >
        <Box h="250px">
          <Image
            src={ele.thumbnail}
            alt={ele.name}
            onClick={() => {
              router.push(`${ROUTES.PRODUCT.DETAIL}/${ele.id}`);
            }}
          />
        </Box>
        <Box w="343px" p="20px 30px">
          <HStack m="10px 0">
            <Heading variant="title">{ele.name}</Heading>
            <Text as="span" color="gray.700">
              {ele.capacity}ml
            </Text>
          </HStack>
          <Heading variant="titlelarge" color="primary.500">
            {price}
            <Text as="span" fontWeight="400" color="black">
              원
            </Text>
          </Heading>
          <Flex alignItems="center">
            <RadiostarIcon color="primary.500" mr="3px" />
            <Heading variant="title" mr="5px">
              {rank}
            </Heading>
            <Text color="gray.700" verticalAlign="-3px">
              리뷰 {ele.reviewCount}개
            </Text>
          </Flex>
          <Box color="gray.700" mt="25px">
            {tagContent(ele.tags)}
          </Box>
        </Box>
        <Flex justifyContent="space-around" p="0 16px">
          <Button variant="orange" mr="10px" onClick={onOpen}>
            바로구매
          </Button>
          <Button variant="white_orange" onClick={onOpen}>
            장바구니
          </Button>
        </Flex>
        <ProductDrawer isOpen={isOpen} onClose={onClose} />
      </Container>
    );
  });
  return <>{productlist}</>;
};

const tagContent = (tags: tagProps[]) => {
  const tag = tags.map((ele) => {
    return (
      <Text as="span" mr="5px" key={ele.id}>
        # {ele.name}
      </Text>
    );
  });
  return tag;
};

export default ProductCard;
