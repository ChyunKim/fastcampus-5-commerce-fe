import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const HomeFooter = () => {
  return (
    <Box bg="gray.800" p="35px 16px 55px" color="white">
      <Heading variant="title">INCOURSE.RUN</Heading>
      <Stack fontSize="12px" m="30px 0">
        <Text>팀명 | 인코스런</Text>
        <Text>구성원 | 김채현</Text>
        <Text>이메일 | co1995@naver.com</Text>
      </Stack>
      <Text fontSize="12px">ⓒINCOURSE.RUN All Right Reserved.</Text>
    </Box>
  );
};
export default HomeFooter;
