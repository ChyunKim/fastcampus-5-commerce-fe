import React, { useRef } from 'react';

import { MY_IMAGES } from '@image';

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

import ReviewContent from './_fragments/ReviewContent';

import {
  RadiostarIcon,
  SubtractIcon,
  ToggleDownIcon,
  ToggleUpIcon,
} from 'generated/icons/CustomIcon';
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
  const detailRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

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
            detailRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            deliveryRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            reviewRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          리뷰(73)
        </Text>
      </Flex>
      <Container p="50px 0" ref={detailRef}>
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
      <Container>
        <Box ref={deliveryRef}>
          <Flex
            p="16px 0"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid"
            borderColor="gray.200"
          >
            <Heading variant="title">주문 및 배송 안내</Heading>
            <ToggleDownIcon boxSize={6} />
          </Flex>
        </Box>
      </Container>
      <Container p="50px 16px" ref={reviewRef}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading variant="title">
            리뷰{' '}
            <Heading as="span" variant="title" color="primary.500">
              78
            </Heading>
            건
          </Heading>
          <HStack>
            <HStack bg="gray.200" p="6px 10px" minW="86px">
              <Heading variant="titlesmall">최신순</Heading>
              <ToggleDownIcon w="17px" h="28px" />
            </HStack>
            <HStack bg="gray.200" p="6px 10px">
              <Heading variant="titlesmall">전체보기</Heading>
              <ToggleDownIcon w="17px" h="28px" />
            </HStack>
          </HStack>
        </Flex>
        <Box p="20px 5px">
          <Flex alignItems="center" justifyContent="space-between">
            <Flex w="140px" justifyContent="space-between">
              <Heading
                variant="title"
                color="white"
                w="39px"
                h="20px"
                bg="primary.500"
                borderRadius="15px"
                textAlign="center"
                lineHeight="20px"
              >
                4.5
              </Heading>
              <RadiostarIcon boxSize={4} color="primary.500" />
              <RadiostarIcon boxSize={4} color="primary.500" />
              <RadiostarIcon boxSize={4} color="primary.500" />
              <RadiostarIcon boxSize={4} color="primary.500" />
              <RadiostarIcon boxSize={4} color="gray.400" />
            </Flex>
            <HStack w="150px" justifyContent="space-between">
              <SubtractIcon w="10px" h="45px" color="primary.500" />
              <SubtractIcon w="10px" h="45px" color="primary.500" />
              <SubtractIcon w="10px" h="45px" color="primary.500" />
              <SubtractIcon w="10px" h="45px" color="primary.500" />
              <SubtractIcon w="10px" h="45px" color="primary.500" />
            </HStack>
          </Flex>
        </Box>
        <Box p="20px 0">
          <ReviewContent />
          <ReviewContent />
          <ReviewContent />
          <ReviewContent />
        </Box>
      </Container>
    </Container>
  );
};

export default ProductDetailPage;
