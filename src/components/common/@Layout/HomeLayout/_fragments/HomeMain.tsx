import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { PlusIcon } from 'generated/icons/MyIcons';

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
        <Heading variant="extraTitle">
          지속가능한
          <br />
          클린{'&'}비건뷰티, 인코스런
        </Heading>
        <Text fontSize="20px">
          자연과 사람에게
          <br /> 책임질 수 있는 지속 가능한
          <br /> 제품을 만듭니다.
        </Text>
      </Box>
      <Box w="100%" h="782px" bg="#FFFCEF" border="none">
        <Image src="/images/pack1.svg" pt="20px" pl="30px" />
        <Image src="/images/pack2.svg" mt="-20px" ml="139px" />
        <Image src="/images/pack3.svg" mt="-40px" />
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
    </Container>
  );
};
export default HomeMain;
