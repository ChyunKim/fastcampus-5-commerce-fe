import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { ProductimgIcon } from 'generated/icons/MyIcons';

const OrderListPage = () => {
  return (
    <Container mt="130px">
      <Heading variant="titlelarge" mb="80px">
        주문내역
      </Heading>
      <Heading variant="titlesmall" p="18px 0" fontSize="12px">
        [2021 - 04 - 01]
      </Heading>
      <Flex
        alignItems="center"
        p="10px"
        m="10px 0"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <ProductimgIcon w="60px" h="60px" />
        <Box textAlign="left">
          <Heading variant="titlesmall">샴푸 & 바디</Heading>
          <Text fontSize="12px" color="gray.700">
            샴푸 & 바디 | 120ml
          </Text>
          <Heading variant="titlesmall" color="primary.500" mt="3px">
            27,000원 / 1개
          </Heading>
        </Box>
      </Flex>
    </Container>
  );
};

export default OrderListPage;
