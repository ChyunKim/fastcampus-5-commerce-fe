import { MY_IMAGES } from '@image';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

import { RadiostarIcon } from 'generated/icons/CustomIcon';

const ProductCard = () => {
  return (
    <Container
      w="343px"
      h="528px"
      p="0"
      borderRadius="20px"
      boxShadow="0 0px 10px 0 #1A1A1A20"
      mb="30px"
    >
      <Box h="250px">
        <Image
          src={MY_IMAGES.IMAGES.RECTANGLE_221.src}
          alt={MY_IMAGES.IMAGES.RECTANGLE_221.alt}
        />
      </Box>
      <Box w="343px" p="20px 30px">
        <HStack m="10px 0">
          <Heading variant="title">바스 & 샴푸</Heading>
          <Text as="span" color="gray.700">
            300ml
          </Text>
        </HStack>
        <Heading variant="titlelarge" color="primary.500">
          27,000
          <Text as="span" fontWeight="400" color="black">
            원
          </Text>
        </Heading>
        <Flex alignItems="center">
          <RadiostarIcon color="primary.500" mr="5px" />
          <Heading variant="title" mr="3px">
            4.3
          </Heading>
          <Text color="gray.700">(리뷰 125개)</Text>
        </Flex>
        <Box color="gray.700" mt="25px">
          <Text as="span" mr="5px">
            # 올인원
          </Text>
          <Text as="span" mr="5px">
            # 클렌저
          </Text>
          <Text as="span" mr="5px">
            # 마일드
          </Text>
          <Text as="span" mr="5px">
            # 바스앤샴푸
          </Text>
        </Box>
      </Box>
      <Flex justifyContent="space-around" p="0 16px">
        <Button variant="orange" w="150px">
          바로구매
        </Button>
        <Button
          w="150px"
          variant="orange"
          bg="white"
          color="primary.500"
          border="1px solid"
          borderColor="primary.500"
        >
          장바구니
        </Button>
      </Flex>
    </Container>
  );
};

export default ProductCard;
