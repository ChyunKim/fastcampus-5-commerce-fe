import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const ReviewContent = () => {
  return (
    <Box p="80px 16px 100px" textAlign="center">
      <Heading variant="extraTitle">
        인코스런을 <strong>직접 사용해본</strong>
        <br />
        고객님의 솔직한 리뷰
      </Heading>
      <Flex>
        <Button variant="orange" w="53px" h="30px" fontSize="12px">
          전체
        </Button>
        <Button
          borderRadius="15px"
          w="83px"
          h="30px"
          fontSize="12px"
          bg="gray.200"
        >
          바스&샴푸
        </Button>
        <Button variant="orange" w="53px" h="30px" fontSize="12px">
          오일
        </Button>
        <Button variant="orange" w="53px" h="30px" fontSize="12px">
          로션
        </Button>
        <Button variant="orange" w="53px" h="30px" fontSize="12px">
          크림
        </Button>
      </Flex>
    </Box>
  );
};

export default ReviewContent;
