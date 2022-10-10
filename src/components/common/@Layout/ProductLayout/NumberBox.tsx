import { useDispatch, useSelector } from 'react-redux';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import {
  PRODUCTSLICE_PROPS,
  quantityDecrease,
  quantityIncrease,
} from '@features/reducer/slice/productSlice';

import { MinusIcon, ProductPlusIcon } from 'generated/icons/CustomIcon';

export interface STOREPROPS {
  product: PRODUCTSLICE_PROPS;
}
const NumberBox = () => {
  const product = useSelector((state: STOREPROPS) => state.product);
  const price = String(product.price * product.quantity).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );
  const dispatch = useDispatch();
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
            onClick={() => {
              dispatch(quantityDecrease());
            }}
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
            onClick={() => {
              dispatch(quantityIncrease());
            }}
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
