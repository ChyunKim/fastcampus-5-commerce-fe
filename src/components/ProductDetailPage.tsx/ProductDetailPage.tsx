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
  useDisclosure,
} from '@chakra-ui/react';

import ProductDrawer from './_fragments/ProductDrawer';
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container mt="110px" mb="80px" p="0">
      <Center>
        <ProductimgIcon w="343px" h="350px" />
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
          <Heading variant="titlelarge">인코스런 로션</Heading>
          <Text color="gray.600">200ml</Text>
        </HStack>
        <Heading variant="titlelarge" color="primary.500">
          27,000
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
          순하고 마일드한 안심 처방으로 피부가 민감하고
          <br />
          연약한 우리 아이를 위한 고보습 로션
        </Text>
        <Flex alignItems="center" mb="15px">
          <RadiostarIcon color="primary.500" mr="5px" />
          <Heading variant="title" mr="3px">
            4.3
          </Heading>
          <Text color="gray.700">(리뷰 125개)</Text>
        </Flex>
        <Box p="5px 0">
          <Button
            variant="orange"
            color="primary.500"
            bg="white"
            border="1px solid"
            borderColor="primary.500"
            mb="10px"
            onClick={onOpen}
          >
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
        <Flex
          p="16px 0"
          justifyContent="space-between"
          alignItems="center"
          ref={deliveryRef}
        >
          <Heading variant="title">주문 및 배송 안내</Heading>
          <ToggleDownIcon boxSize={6} />
        </Flex>
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
              78
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
      <ProductDrawer isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default ProductDetailPage;
