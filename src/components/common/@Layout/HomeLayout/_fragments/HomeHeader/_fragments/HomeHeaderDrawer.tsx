import { ChakraProps, Container, DrawerProps } from '@chakra-ui/react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
} from '@chakra-ui/react';

interface HomeHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const HomeHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: HomeHeaderDrawerProps) => {
  return (
    <Drawer placement="left" size="sm" {...basisProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          style={{ outline: 'none' }}
          fontSize="14px"
          bg="none"
          border="none"
          p="30px"
        />
        <DrawerBody //
          {...bodyProps}
          p="30px 0"
        >
          <Box borderBottom="1px solid" borderColor="gray.200" p="30px 0">
            <Heading variant="titlelarge" p="0 16px">
              카테고리
            </Heading>
          </Box>
          <Box borderBottom="1px solid" borderColor="gray.200" p="30px 0">
            <Heading variant="titlelarge" p="0 16px">
              홈
            </Heading>
          </Box>
          <Box borderBottom="1px solid" borderColor="gray.200" p="30px 0">
            <Heading variant="titlelarge" p="0 16px">
              상품보기
            </Heading>
          </Box>
          <Box borderBottom="1px solid" borderColor="gray.200" p="30px 0">
            <Heading variant="titlelarge" p="0 16px">
              마이페이지
            </Heading>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default HomeHeaderDrawer;
