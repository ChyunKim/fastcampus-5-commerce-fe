import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';

import { InstagramIcon, UpwardArrowIcon } from 'generated/icons/CustomIcon';

const InfoContent = () => {
  return (
    <Box
      p="80px 16px"
      textAlign="center"
      color="white"
      bgGradient="linear(to-r,#FF710B,#FFAB2E)"
    >
      <Heading variant="titlelarge">인코스런에 대해 더 궁금하신가요?</Heading>
      <Text fontSize="16px" m="10px 0">
        인스타그램을 방문하시면 더욱 다양한
        <br />
        인코스런의 이야기를 확인하실 수 있어요!
      </Text>
      <Center>
        <Button
          bg="none"
          fontSize="16px"
          _focus={{
            bg: 'none',
          }}
          _hover={{
            bg: 'none',
          }}
          _active={{
            bg: 'none',
          }}
        >
          <InstagramIcon boxSize={6} m="0 5px" />
          INCOURSE.RUN
        </Button>
      </Center>
      <UpwardArrowIcon w="50px" h="50px" float="right" />
    </Box>
  );
};

export default InfoContent;
