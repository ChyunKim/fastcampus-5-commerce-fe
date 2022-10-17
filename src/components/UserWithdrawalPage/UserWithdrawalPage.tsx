import { Box, Container, HStack, Heading, Text } from '@chakra-ui/react';

import { useGetUserMeQuery } from '@apis/user/UserApi.query';

import { getToken } from '@utils/localStorage/token';

const UserWithdrawalPage = () => {
  const { data } = useGetUserMeQuery({
    variables: { accessToken: getToken()?.access! },
  });
  return (
    <Container mt="130px">
      <Heading variant="titlelarge">회원탈퇴</Heading>
      <Box p="18px 0" mt="80px">
        회원 탈퇴 시 개인 정보 및 인코스런에서 만들어진 모든 데이터는
        삭제됩니다. 한 번 삭제된 정보는 복구가 불가능합니다.
      </Box>
      <Box p="14px 0">
        <Heading variant="title">회원정보</Heading>
      </Box>
      <Box>
        <HStack mb="10px">
          <Text w="80px" mr="20px">
            이름
          </Text>
          <Text color="gray.700"> {data?.name}</Text>
        </HStack>
        <HStack mb="10px">
          <Text w="80px" mr="20px">
            핸드폰번호
          </Text>
          <Text color="gray.700">
            {' '}
            {data?.phone.slice(0, 3)}-{data?.phone.slice(3, 7)}-
            {data?.phone.slice(7, 11)}
          </Text>
        </HStack>
        <HStack mb="20px">
          <Text w="80px" mr="20px">
            이메일주소
          </Text>
          <Text color="gray.700"> {data?.email}</Text>
        </HStack>
      </Box>
      <Box p="14px 0">
        <Heading variant="title">탈퇴사유</Heading>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default UserWithdrawalPage;
