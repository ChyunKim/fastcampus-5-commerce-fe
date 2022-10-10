import { useSelector } from 'react-redux';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { PRODUCTSLICE_PROPS } from '@features/reducer/slice/productSlice';

import { MinusIcon, ProductPlusIcon } from 'generated/icons/CustomIcon';

interface STOREPROPS {
  product: PRODUCTSLICE_PROPS;
}
const NumberBox = () => {
  const product = useSelector((state: STOREPROPS) => state.product);
  const price = String(product.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Box bg="gray.200" p="10px" m="0 auto" borderRadius="5px">
      <Text fontSize="16px" color="gray.600">
        {product.name} | {product.capacity}ml
      </Text>

      <Flex m="5px 0" justifyContent="space-between" alignItems="center">
        <Flex>
          <MinusIcon
            bg="white"
            borderLeftRadius="5px"
            w="25px"
            h="25px"
            border="1px solid"
            borderColor="gray.300"
          />
          <Box
            bg="white"
            color="gray.800"
            fontSize="12px"
            m="0 -1px"
            w="25px"
            h="25px"
            border="1px solid"
            borderColor="gray.300"
            textAlign="center"
            lineHeight="23px"
          >
            {product.quantity}
          </Box>
          <ProductPlusIcon
            bg="white"
            borderRightRadius="5px"
            w="25px"
            h="25px"
            border="1px solid"
            borderColor="gray.300"
          />
        </Flex>
        <Heading variant="title" color="gray.600">
          {price}원
        </Heading>
      </Flex>
    </Box>
  );
};
export default NumberBox;
