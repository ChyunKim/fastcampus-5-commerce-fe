import { MY_IMAGES } from '@image';

import { Box, Container, Image, Stack, Text } from '@chakra-ui/react';

const HomeMain = () => {
  return (
    <Box>
      <Image src={MY_IMAGES.IMAGES.MAIN.src} alt={MY_IMAGES.IMAGES.MAIN.src} />
    </Box>
  );
};
export default HomeMain;
