import { Box, Heading, Text } from '@chakra-ui/react';

const FirstContent = () => {
  return (
    <Box
      w="100%"
      h="782px"
      border="none"
      bgImage="url('/images/main.svg')"
      p="160px 16px"
      m=""
    >
      <Heading variant="extraTitle" m="0">
        지속가능한
        <br />
        클린{'&'}비건뷰티, 인코스런
      </Heading>
      <Text fontSize="20px" mt="20px">
        자연과 사람에게
        <br /> 책임질 수 있는 지속 가능한
        <br /> 제품을 만듭니다.
      </Text>
    </Box>
  );
};

export default FirstContent;
