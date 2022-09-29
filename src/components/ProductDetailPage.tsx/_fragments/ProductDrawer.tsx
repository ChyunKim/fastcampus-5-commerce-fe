import {
  Box,
  ChakraProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Text,
} from '@chakra-ui/react';

import NumberBox from '@components/common/@Layout/ProductLayout/NumberBox';

interface HomeHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const ProductDrawer = ({ bodyProps, ...basisProps }: HomeHeaderDrawerProps) => {
  return (
    <Drawer placement="bottom" {...basisProps}>
      <DrawerOverlay bg="dim.secondary" />
      <DrawerContent borderTopRadius="20px">
        <DrawerBody {...bodyProps} p="20px 16px">
          <NumberBox />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;
