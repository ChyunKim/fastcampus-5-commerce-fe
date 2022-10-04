import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

import { ProductimgIcon } from 'generated/icons/MyIcons';

const OrderCompletePage = () => {
  return (
    <Container mt="130px" p="0">
      <Heading variant="titlelarge" p="0 16px">
        주문결제
      </Heading>
      <Box mt="80px">
        <Heading variant="titlesmall" p="16px">
          [2021 - 04 - 01]
        </Heading>
        <Flex
          alignItems="center"
          p="10px"
          m="10px 0"
          borderTop="1px solid"
          borderBottom="10px solid"
          borderColor="gray.200"
        >
          <ProductimgIcon w="60px" h="60px" />
          <Box textAlign="left">
            <Heading variant="titlesmall">샴푸 & 바디</Heading>
            <Text fontSize="12px" color="gray.700">
              샴푸 & 바디 | 120ml
            </Text>
            <Heading variant="titlesmall" color="primary.500" mt="3px">
              27,000원 / 1개
            </Heading>
          </Box>
          <Heading variant="titlesmall" color="primary.500" ml="120px">
            결제완료
          </Heading>
        </Flex>
      </Box>
      <Box p="0 16px 24px" borderBottom="10px solid" borderColor="gray.200">
        <Heading variant="title" p="13px 0" mb="15px">
          배송지 정보
        </Heading>
        <HStack m="10px 0">
          <Text w="92px">이름</Text>
          <Text color="gray.700">김인코스런</Text>
        </HStack>
        <HStack m="10px 0">
          <Text w="92px">핸드폰 번호</Text>
          <Text color="gray.700">010-1234-1234</Text>
        </HStack>
        <HStack m="10px 0">
          <Text w="92px">우편번호</Text>
          <Text color="gray.700">01234</Text>
        </HStack>
        <HStack alignItems="flex-start" m="10px 0">
          <Text w="92px">주소</Text>
          <Text color="gray.700" w="214px">
            서울특별시 마포구 성산동 123-3 성산빌딩 B동 302호
          </Text>
        </HStack>
        <HStack m="10px 0">
          <Text w="92px">배송요청사항</Text>
          <Text color="gray.700">문앞에 두고 가주세요</Text>
        </HStack>
      </Box>
      <Box p="0 16px">
        <Heading variant="title" p="13px 0" mb="28px">
          결제정보
        </Heading>
        <Flex color="gray.700" justifyContent="space-between" m="10px 0">
          <Text>총 상품금액</Text>
          <Text>27,000원</Text>
        </Flex>
        <Flex color="gray.700" justifyContent="space-between" m="10px 0">
          <Text>총 배송비</Text>
          <Text>2,500원</Text>
        </Flex>
        <Flex color="gray.700" justifyContent="space-between" m="10px 0 30px">
          <Text>결제수단</Text>
          <Heading variant="title">신용카드 결제</Heading>
        </Flex>
        <Flex
          justifyContent="space-between"
          p="15px 0"
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <Text>결제수단</Text>
          <Heading variant="title" color="primary.500">
            29,500원
          </Heading>
        </Flex>
      </Box>
      <Flex mt="60px" mb="30px">
        <Link href={ROUTES.HOME}>
          <Button variant="white_orange" mr="10px">
            메인화면 이동
          </Button>
        </Link>
        <Button variant="orange">주문내역 이동</Button>
      </Flex>
    </Container>
  );
};

export default OrderCompletePage;
