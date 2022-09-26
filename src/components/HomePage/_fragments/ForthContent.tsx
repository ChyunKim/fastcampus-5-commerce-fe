import { MY_IMAGES } from '@image';

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ListarrowIcon } from 'generated/icons/CustomIcon';

const ForthContent = () => {
  return (
    <>
      <Box w="375px" h="450px" bgImage="/images/bgevent.svg" p="100px 16px">
        <Flex>
          <Heading variant="extraTitle" color="primary.500" m="0">
            인코스런
          </Heading>
          <Heading variant="extraTitle" fontWeight="400" m="0">
            가입하고
          </Heading>
        </Flex>
        <Heading variant="extraTitle" m="0">
          전상품 1000원 혜택
        </Heading>
        <Heading variant="extraTitle" fontWeight="400" m="0">
          받아보세요.
        </Heading>
        <Flex mt="20px" alignItems="center">
          <Text fontSize="16px"> 이벤트상세보기</Text>
          <ListarrowIcon boxSize={6} />
        </Flex>
      </Box>
      <Box bgImage="/images/bgretangle.png" p="20px 16px">
        <Box bg="white" textAlign="center" pt="70px" pb="20px">
          <Heading variant="extraTitle">소중한 우리 아이를 위해</Heading>
          <Text>
            순수 자연유래 / 자연유래 유화제 / 자연유래
            <br /> 계면활성제 99.9% 타가는 EWG 그린등급 <br />
            성분 100% 만을 사용한 건강한 화장품입니다.
          </Text>
          <Button variant="orange" w="190px" m="30px 0">
            상품전체보기
          </Button>
          <VStack m="50px 0">
            <Image
              src={MY_IMAGES.IMAGES.PRODUCTIMG.src}
              alt={MY_IMAGES.IMAGES.PRODUCTIMG.alt}
            />
            <Text fontWeight="700" pb="30px">
              바스 & 샴푸
            </Text>
          </VStack>
          <VStack m="50px 0">
            <Image
              src={MY_IMAGES.IMAGES.PRODUCTIMG.src}
              alt={MY_IMAGES.IMAGES.PRODUCTIMG.alt}
            />
            <Text fontWeight="700" pb="30px">
              오일
            </Text>
          </VStack>
          <VStack m="50px 0">
            <Image
              src={MY_IMAGES.IMAGES.PRODUCTIMG.src}
              alt={MY_IMAGES.IMAGES.PRODUCTIMG.alt}
            />
            <Text fontWeight="700" pb="30px">
              파우더 로션
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
};
export default ForthContent;
