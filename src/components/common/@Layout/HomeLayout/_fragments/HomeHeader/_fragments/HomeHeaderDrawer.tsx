import {
  ChakraProps,
  DrawerFooter,
  DrawerProps,
  HStack,
} from '@chakra-ui/react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
} from '@chakra-ui/react';

import { LogoutIcon } from 'generated/icons/MyIcons';

interface HomeHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const HomeHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: HomeHeaderDrawerProps) => {
  return (
    <Drawer placement="left" size="xs" {...basisProps}>
      <DrawerOverlay bg="#E5E5E5" />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton
            style={{ outline: 'none' }}
            fontSize="14px"
            bg="none"
            border="none"
            p="30px"
            h="80px"
            _focus={{
              bg: 'none',
            }}
            _hover={{
              bg: 'none',
            }}
          />
        </DrawerHeader>
        <DrawerBody //
          {...bodyProps}
          p="30px 0"
        >
          <Box borderBottom="1px solid" borderColor="gray.200" p="30px 0">
            <Heading variant="titlelarge" p="0 16px">
              카테고리
            </Heading>
          </Box>
          <Box borderBottom="1px solid" borderColor="gray.200" p="16px 0">
            <Heading variant="title" p="0 16px">
              홈
            </Heading>
          </Box>
          <Box borderBottom="1px solid" borderColor="gray.200" p="16px 0">
            <Heading variant="title" p="0 16px">
              상품보기
            </Heading>
          </Box>
          <Box borderBottom="1px solid" borderColor="gray.200" p="16px 0">
            <Heading variant="title" p="0 16px">
              마이페이지
            </Heading>
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <HStack>
            <LogoutIcon boxSize={6} />
            <Heading variant="titlelarge">로그아웃</Heading>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default HomeHeaderDrawer;
