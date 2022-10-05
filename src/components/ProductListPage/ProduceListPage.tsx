import { Container } from '@chakra-ui/react';

import ProductCard from './_fragments/ProductCard';

export interface ProductlistProps {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  thumbnail: string;
  tags: [];
  avgRate: number;
  reviewCount: string;
}

export interface ProductComProps {
  list: ProductlistProps[];
}

const ProductListPage = (props: ProductComProps) => {
  return (
    <Container mt="120px" mb="80px" bg="white">
      <ProductCard list={props.list} />
    </Container>
  );
};

export default ProductListPage;
