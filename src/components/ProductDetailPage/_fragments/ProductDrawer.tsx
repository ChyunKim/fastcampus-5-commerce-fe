import Link from 'next/link';
import { useSelector } from 'react-redux';

import {
  Box,
  Button,
  ChakraProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Text,
} from '@chakra-ui/react';

import NumberBox, {
  STOREPROPS,
} from '@components/common/@Layout/ProductLayout/NumberBox';

import { ROUTES } from '@constants/routes';

interface HomeHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const ProductDrawer = ({ bodyProps, ...basisProps }: HomeHeaderDrawerProps) => {
  const product = useSelector((state: STOREPROPS) => state.product);

  return (
    <Drawer placement="bottom" {...basisProps}>
      <DrawerOverlay bg="dim.secondary" />
      <DrawerContent borderTopRadius="20px">
        <DrawerBody {...bodyProps} p="20px 16px 30px">
          <NumberBox />
          <Text fontSize="16px" m="5px 0">
            총수량{' '}
            <Text as="span" color="primary.500" fontWeight="700">
              {product.quantity}
            </Text>
            개
          </Text>
          <Flex justifyContent="space-between" pt="10px">
            <Link href={ROUTES.SHOPPINGCART.MAIN}>
              <Button variant="white_orange" mr="10px">
                장바구니
              </Button>
            </Link>
            <Link href={ROUTES.ORDER.MAIN}>
              <Button variant="orange">바로구매</Button>
            </Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;
