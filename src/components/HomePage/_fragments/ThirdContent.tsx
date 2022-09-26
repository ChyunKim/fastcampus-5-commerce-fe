import { Box, Flex, Heading } from '@chakra-ui/react';

import { EllipseIcon } from 'generated/icons/CustomIcon';

const ThirdContent = () => {
  return (
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
  );
};

export default ThirdContent;
