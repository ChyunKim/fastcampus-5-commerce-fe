import { MY_IMAGES } from '@image';

import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { EllipseIcon, PlusIcon } from 'generated/icons/MyIcons';

const HomeMain = () => {
  return (
    <Container p="0">
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
      <Box w="100%" h="782px" bg="#FFFCEF" border="none">
        <Image
          src={MY_IMAGES.IMAGES.PACK1.src}
          alt={MY_IMAGES.IMAGES.PACK1.alt}
          pt="20px"
          pl="30px"
        />
        <Image
          src={MY_IMAGES.IMAGES.PACK2.src}
          alt={MY_IMAGES.IMAGES.PACK2.alt}
          mt="-20px"
          ml="139px"
        />
        <Image
          src={MY_IMAGES.IMAGES.PACK3.src}
          alt={MY_IMAGES.IMAGES.PACK3.alt}
          mt="-40px"
        />
        <Flex>
          <PlusIcon color="primary.500" mt="50px" ml="90px" mr="16px" />
          <Heading variant="extraTitle" mt="-30px">
            불합리한 유통구조
            <br />
            과도한 패키징
            <br />
            과장된 광고
          </Heading>
        </Flex>
        <Box fontSize="20px" mt="30px" ml="75px">
          <Text>부풀려지는 가격은 이제 그만!</Text>
          <Flex>
            <Text color="primary.500" fontWeight="700">
              인코스런
            </Text>
            <Text>은 가격거품을 제거한</Text>
          </Flex>
          <Text>착한소비를 위해 태어났습니다.</Text>
        </Box>
      </Box>
      <Box
        h="430px"
        bg="#FFFCEF"
        bgImage="url('/images/bgcircle.svg')"
        bgRepeat="no-repeat"
        bgPosition="center"
        border="none"
      >
        <Flex justifyContent="center" pt="170px" pl="44px">
          <EllipseIcon boxSize={2} m="0 9px" />
          <EllipseIcon boxSize={2} m="0 9px" />
          <EllipseIcon boxSize={2} m="0 9px" />
        </Flex>
        <Heading variant="ext raTitle" m="0" textAlign="center" pl="40px">
          이제 합리적으로
          <br />
          지갑을 지키세요!
        </Heading>
      </Box>
      <Box pt="70px">
        <Heading variant="extraTitle" color="primary.500" textAlign="center">
          부풀려지는 가격 이제 그만!
        </Heading>
        <Box textAlign="center" p="10px 0" fontSize="20px">
          <Text>
            불합리한 <strong> 중간 유통 거품을 제거</strong>한
            <br />
            인코스런만의 투명한 유통혁신
          </Text>
          <Box p="60px 0"></Box>
        </Box>
      </Box>
    </Container>
  );
};
export default HomeMain;
