import Link from 'next/link';

import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { useGetUserMeQuery } from '@apis/user/UserApi.query';

import { ROUTES } from '@constants/routes';
import { getToken } from '@utils/localStorage/token';

import {
  ListarrowIcon,
  MyreviewIcon,
  OrderlistIcon,
  UserinfoIcon,
} from 'generated/icons/CustomIcon';

const MyAccountPage = () => {
  const { data } = useGetUserMeQuery({
    variables: { accessToken: getToken()?.access! },
  });

  return (
    <Container mt="150px" mb="30px" p="0">
      <Box p=" 0 16px" borderBottom="10px solid" borderColor="gray.200">
        <Heading variant="title">{data?.name}</Heading>
        <Text color="gray.400" mb="30px">
          {data?.email}
        </Text>
      </Box>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        p="30px 0"
        borderBottom="10px solid"
        borderColor="gray.200"
      >
        <Link href={ROUTES.MYACCOUNT.EDITUSERINFO}>
          <VStack cursor="pointer">
            <UserinfoIcon boxSize={50} />
            <Text color="gray.800">회원정보수정</Text>
          </VStack>
        </Link>
        <Link href={ROUTES.MYACCOUNT.ORDERLIST}>
          <VStack cursor="pointer">
            <OrderlistIcon boxSize={50} />{' '}
            <Text color="gray.800">주문내역</Text>
          </VStack>
        </Link>
        <VStack>
          <MyreviewIcon boxSize={50} />
          <Text color="gray.800">내 상품 리뷰</Text>
        </VStack>
      </Flex>
      <Link href={ROUTES.MYACCOUNT.WITHDRAWAL}>
        <Flex
          p="16px"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          cursor="pointer"
        >
          <Text> 회원탈퇴</Text>
          <ListarrowIcon boxSize={6} />
        </Flex>
      </Link>
      <Link href={ROUTES.LOGIN.MAIN}>
        <Flex
          p="16px"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          cursor="pointer"
        >
          <Text> 로그아웃</Text>
          <ListarrowIcon boxSize={6} />
        </Flex>
      </Link>
    </Container>
  );
};

export default MyAccountPage;
