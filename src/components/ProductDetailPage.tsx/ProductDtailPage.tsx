import React from 'react';

import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';

import { ProductimgIcon } from 'generated/icons/MyIcons';

const ProductDetailPage = () => {
  const [tabColor, setTabColor] = React.useState([
    'primary.500',
    'gray.600',
    'gray.600',
  ]);

  const [tabFontWeight, setTabFontWeight] = React.useState([
    '700',
    '400',
    '400',
  ]);

  return (
    <Container mt="110px" mb="80px" p="0">
      <Center>
        <ProductimgIcon w="343px" h="350px" />
      </Center>
      <Flex fontSize="16px" justifyContent="space-around">
        <Text
          fontWeight={tabFontWeight[0]}
          color={tabColor[0]}
          cursor="pointer"
          onClick={(e) => {
            setTabColor(['primary.500', 'gray.600', 'gray.600']);
            setTabFontWeight(['700', '400', '400']);
          }}
        >
          상세정보
        </Text>
        <Text
          fontWeight={tabFontWeight[1]}
          color={tabColor[1]}
          cursor="pointer"
          onClick={() => {
            setTabColor(['gray.600', 'primary.500', 'gray.600']);
            setTabFontWeight(['400', '700', '400']);
          }}
        >
          구매정보
        </Text>
        <Text
          fontWeight={tabFontWeight[2]}
          color={tabColor[2]}
          cursor="pointer"
          onClick={() => {
            setTabColor(['gray.600', 'gray.600', 'primary.500']);
            setTabFontWeight(['400', '400', '700']);
          }}
        >
          리뷰(73)
        </Text>
      </Flex>
    </Container>
  );
};

export default ProductDetailPage;
