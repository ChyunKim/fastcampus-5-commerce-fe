import Slider from 'react-slick';

import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { RadiostarIcon } from 'generated/icons/CustomIcon';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function ContentSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };
  return (
    <Container m="10px 0" pl="16px">
      <Slider {...settings}>
        <Box
          borderRadius="10px"
          boxShadow="0 0px 10px 0 #1A1A1A20"
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
        <Box
          w="325px"
          h="464px"
          borderRadius="10px"
          boxShadow="0 0px 10px 0 #1A1A1A20"
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
        <Box
          w="325px"
          h="464px"
          borderRadius="10px"
          boxShadow="0 0px 10px 0 #1A1A1A20"
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
      </Slider>
    </Container>
  );
}
