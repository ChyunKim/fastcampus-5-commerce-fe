import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const ReviewContent = () => {
  return (
    <Box p="80px 16px 100px" textAlign="center">
      <Heading variant="extraTitle">
        인코스런을 <strong>직접 사용해본</strong>
        <br />
        고객님의 솔직한 리뷰
      </Heading>
      <Flex mt="50px" mb="70px">
        <Button variant="orange" w="53px" h="30px" fontSize="12px" m="0 5px">
          전체
        </Button>
        <Button
          borderRadius="15px"
          w="83px"
          h="30px"
          fontSize="12px"
          bg="gray.200"
          m="0 5px"
          fontWeight="400"
        >
          바스&샴푸
        </Button>
        <Button
          borderRadius="15px"
          w="53px"
          h="30px"
          fontSize="12px"
          m="0 5px"
          fontWeight="400"
        >
          오일
        </Button>
        <Button
          borderRadius="15px"
          w="53px"
          h="30px"
          fontSize="12px"
          m="0 5px"
          fontWeight="400"
        >
          로션
        </Button>
        <Button
          borderRadius="15px"
          w="53px"
          h="30px"
          fontSize="12px"
          m="0 5px"
          fontWeight="400"
        >
          크림
        </Button>
      </Flex>
      <Box
        w="325px"
        h="464px"
        borderRadius="10px"
        boxShadow="0 0px 10px 0 #1A1A1A10"
        p="20px"
      >
        <Flex>
          <Heading variant="titlesmall">incourse.run</Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default ReviewContent;
