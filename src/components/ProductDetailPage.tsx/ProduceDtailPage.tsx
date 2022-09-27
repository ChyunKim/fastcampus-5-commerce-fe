import { Box, Container, Image } from '@chakra-ui/react';

import { ProductimgIcon } from 'generated/icons/MyIcons';

const ProductDetailPage = () => {
  return (
    <Container mt="110px" mb="80px">
      <Box>
        <ProductimgIcon />
      </Box>
    </Container>
  );
};

export default ProductDetailPage;
