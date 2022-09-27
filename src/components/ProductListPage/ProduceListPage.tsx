import { Container } from '@chakra-ui/react';

import ProductCard from './_fragments/ProductCard';

const ProductListPage = () => {
  return (
    <Container mt="120px" mb="80px" bg="white">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
};

export default ProductListPage;
