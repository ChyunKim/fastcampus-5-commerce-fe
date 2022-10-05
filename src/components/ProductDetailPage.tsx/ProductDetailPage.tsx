import React from 'react';

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
  useDisclosure,
} from '@chakra-ui/react';

import ProductDrawer from './_fragments/ProductDrawer';
import ReviewContent, { rankReviwStar } from './_fragments/ReviewContent';

import {
  RadiostarIcon,
  SubtractIcon,
  ToggleDownIcon,
  ToggleUpIcon,
} from 'generated/icons/CustomIcon';
import { ProductimgIcon } from 'generated/icons/MyIcons';

interface DetailContentProps {
  id: number;
  name: string;
  description: string;
  price: string;
  capacity: string;
  detail: string;
  photo: string;
  reviewList: [];
  avgRate: number;
  reviewCount: number;
}
interface DetailComProps {
  detail: DetailContentProps;
}
const ProductDetailPage = (props: DetailComProps) => {
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
  const [viewDelivery, setViewDelivery] = React.useState('60px');
  const detailRef = React.useRef<HTMLDivElement>(null);
  const deliveryRef = React.useRef<HTMLDivElement>(null);
  const reviewRef = React.useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(props.detail);

  const price = String(props.detail.price).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );

  const rank = props.detail.avgRate
    ? Number(props.detail.avgRate.toFixed(0))
    : 0;

  const rankreview = props.detail.avgRate ? props.detail.avgRate.toFixed(1) : 0;
  return (
    <Container mt="110px" mb="80px" p="0">
      <Center>
        <Image w="343px" h="350px" src={props.detail.photo} />
      </Center>
      <Container
        borderTopRadius="20px"
        boxShadow="0 0 10px 0 #1A1A1A10"
        pt="10px"
      >
        <Center>
          <Box w="50px" h="5px" bg="gray.200" borderRadius="2.5px" mb="30px" />
        </Center>
        <HStack alignItems="center" mb="14px">
          <Heading variant="titlelarge">{props.detail.name}</Heading>
          <Text color="gray.600">{props.detail.capacity}ml</Text>
        </HStack>
        <Heading variant="titlelarge" color="primary.500">
          {price}
          <Text as="span" color="black" fontWeight="400">
            원
          </Text>
        </Heading>
        <Heading variant="titlesmall" color="gray.800">
          3만원 이상 구매시{' '}
          <Heading variant="titlesmall" as="span" color="primary.500">
            무료배송
          </Heading>
        </Heading>
        <Text m="10px 0" fontSize="16px">
          {props.detail.description}
        </Text>
        <Flex alignItems="center" mb="15px">
          <RadiostarIcon color="primary.500" mr="3px" />
          <Heading variant="title" mr="5px">
            {props.detail.avgRate ? rankreview : '리뷰없음'}
          </Heading>
          <Text color="gray.700">(리뷰 {props.detail.reviewCount}개)</Text>
        </Flex>
        <Box p="5px 0">
          <Button variant="white_orange" mb="10px" onClick={onOpen}>
            장바구니
          </Button>
          <Button variant="orange" onClick={onOpen}>
            바로구매
          </Button>
        </Box>
      </Container>
      <Flex fontSize="16px" justifyContent="space-around" p="26px 16px">
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
          리뷰({props.detail.reviewCount})
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
            상세정보 펼쳐보기
            {viewDetail === '470px' ? (
              <ToggleDownIcon boxSize={6} m="0 5px" />
            ) : (
              <ToggleUpIcon boxSize={6} m="0 5px" />
            )}
          </Button>
        </Box>
      </Container>
      <Container>
        <Box h={viewDelivery} overflow="hidden">
          <Flex
            p="16px 0"
            justifyContent="space-between"
            alignItems="center"
            ref={deliveryRef}
          >
            <Heading variant="title">주문 및 배송 안내</Heading>
            <Button
              onClick={() =>
                viewDelivery === '60px'
                  ? setViewDelivery('auto')
                  : setViewDelivery('60px')
              }
            >
              {' '}
              {viewDelivery === '60px' ? (
                <ToggleDownIcon boxSize={6} m="0 5px" />
              ) : (
                <ToggleUpIcon boxSize={6} m="0 5px" />
              )}
            </Button>
          </Flex>
          <Box>
            <Heading variant="title" mt="14px" mb="10px">
              [주문 및 배송 안내]
            </Heading>
            <Text fontSize="16px" mt="10px">
              배송방법 : 인코스런 택배
            </Text>
            <Text fontSize="16px" mt="10px">
              배송지역 : 전국
            </Text>
            <Text fontSize="16px" mt="10px">
              배송비용 : 단품 상품 구매 시 3,000배송비 발생
            </Text>
            <Text fontSize="16px" ml="70px" mb="20px">
              그외 단품 묶음 구매의 경우 30,000원 이상 구매 시 무료배송
            </Text>
          </Box>
        </Box>
      </Container>
      <Container ref={reviewRef}>
        <Flex
          p="50px 0"
          justifyContent="space-between"
          alignItems="center"
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <Heading variant="title">
            리뷰{' '}
            <Heading as="span" variant="title" color="primary.500">
              {props.detail.reviewCount}
            </Heading>
            건
          </Heading>
          <HStack>
            <HStack bg="gray.200" p="6px 10px" minW="86px" borderRadius="5px">
              <Heading variant="titlesmall">최신순</Heading>
              <ToggleDownIcon w="17px" h="28px" />
            </HStack>
            <HStack bg="gray.200" p="6px 10px" borderRadius="5px">
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
                {rankreview}
              </Heading>
              {rankReviwStar(rank)}
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
          {props.detail.reviewCount ? (
            <ReviewContent list={props.detail.reviewList} />
          ) : (
            <Text mt="17px" mb="9px">
              등록된 리뷰가 없습니다.
            </Text>
          )}
        </Box>
      </Container>
      <ProductDrawer isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default ProductDetailPage;
