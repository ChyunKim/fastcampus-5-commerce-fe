import { Container, Heading } from '@chakra-ui/react';

import OrderInfomation from './_fragments/OrderInfomation';
import OrderProduct from './_fragments/OrderProduct';

const OrderPage = () => {
  return (
    <Container mt="130px" p="0">
      <Heading variant="titlelarge" p="0 16px">
        주문결제
      </Heading>
      <OrderProduct />
      <OrderInfomation />
    </Container>
  );
};
export default OrderPage;
