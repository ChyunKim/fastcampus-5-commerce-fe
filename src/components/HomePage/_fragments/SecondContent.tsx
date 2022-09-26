import { MY_IMAGES } from '@image';

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { EllipseIcon, PlusIcon } from 'generated/icons/CustomIcon';

const SecondContent = () => {
  return (
    <>
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
        <Heading variant="extraTitle" m="0" textAlign="center" pl="40px">
          이제 합리적으로
          <br />
          지갑을 지키세요!
        </Heading>
      </Box>
    </>
  );
};

export default SecondContent;
