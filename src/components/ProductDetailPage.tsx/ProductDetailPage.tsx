import React from 'react';

import { MY_IMAGES } from '@image';

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

import { ToggleDownIcon, ToggleUpIcon } from 'generated/icons/CustomIcon';
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

  const [viewDetail, setViewDetail] = React.useState('470px');

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
      <Container p="50px 0">
        <Box h={viewDetail} overflow="hidden" pb="30px">
          <Image src={MY_IMAGES.IMAGES.OILDETAIL.src} />
        </Box>
        <Box p="0 16px">
          <Button
            variant="white"
            onClick={() =>
              viewDetail === '470px'
                ? setViewDetail('auto')
                : setViewDetail('470px')
            }
          >
            상세정보 펼쳐보기{' '}
            {viewDetail === '470px' ? (
              <ToggleDownIcon boxSize={6} m="0 5px" />
            ) : (
              <ToggleUpIcon boxSize={6} m="0 5px" />
            )}
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default ProductDetailPage;
