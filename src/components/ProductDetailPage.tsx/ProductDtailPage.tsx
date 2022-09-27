import { Box, Container, Image } from '@chakra-ui/react';

import { ProductimgIcon } from 'generated/icons/MyIcons';

const ProductDetailPage = () => {
  return (
    <Container mt="110px" mb="80px" p="0">
      <Box>
        <ProductimgIcon w="343px" h="350px" />
      </Box>
    </Container>
  );
};

export default ProductDetailPage;
