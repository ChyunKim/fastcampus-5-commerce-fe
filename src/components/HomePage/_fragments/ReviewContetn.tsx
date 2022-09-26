import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { CallIcon, RadiostarIcon } from 'generated/icons/CustomIcon';

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
        textAlign="left"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Heading variant="titlesmall">incourse.run</Heading>
          <Flex justifyContent="center">
            <RadiostarIcon boxSize={3} color="primary.500" />
            <RadiostarIcon boxSize={3} color="primary.500" />
            <RadiostarIcon boxSize={3} color="primary.500" />
            <RadiostarIcon boxSize={3} color="primary.500" />
            <RadiostarIcon boxSize={3} color="gray.400" />
          </Flex>
        </Flex>
        <Text color="gray.700" fontSize="12px">
          2021.03.29
        </Text>
        <Text
          w="auto"
          h="225px"
          fontSize="16px"
          mt="30px"
          textOverflow="ellipsis"
          lineHeight="28px"
        >
          순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온
          가족이 사용할 수 있는 화장품이라고 추천받았어요. 처음엔 반신반의하는
          마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을
          사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의
          완치단계입니다 . 아이 엄마들에게 추천드려요!
        </Text>
        <Box
          h="0"
          border="1px solid"
          borderColor="gray.300"
          m="20px 0"
          bg="gray.300"
        />
        <Flex justifyContent="space-between">
          <Box borderRadius="5px" w="80px" h="80px" />
          <Box borderRadius="5px" w="80px" h="80px" />
          <Box borderRadius="5px" w="80px" h="80px" />
        </Flex>
      </Box>
      <CallIcon w="50px" h="50px" float="right" mt="30px" />
    </Box>
  );
};

export default ReviewContent;
