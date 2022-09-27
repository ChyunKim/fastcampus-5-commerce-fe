import { Flex, IconButton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import MenuIcon from '@components/common/@Icons/System/Menu';

import { LAYOUT } from '@constants/layout';

import { HOME_HEADER_VARIANTS, HomeHeaderVariantType } from './HomeHeader.data';
import HomeHeaderDrawer from './_fragments/HomeHeaderDrawer';

import { CartIcon, LogoIcon } from 'generated/icons/CustomIcon';

interface HomeHeaderProps {
  variant?: HomeHeaderVariantType;
}

const HomeHeader = ({ variant = 'light' }: HomeHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cssByVariant = HOME_HEADER_VARIANTS[variant];

  return (
    <>
      <Flex
        as="header"
        w="inherit"
        alignItems="center"
        position="fixed"
        transition="all 0.3s"
        justifyContent="space-between"
        h={LAYOUT.HEADER.HEIGHT}
        p="0 16px"
        {...cssByVariant.header}
      >
        <MenuIcon
          w="24px"
          h="24px"
          color="black"
          onClick={onOpen}
          cursor="pointer"
          bg="none"
          aria-label="btn-toggle-drawer"
          _hover={{
            bg: 'none',
          }}
        />
        <LogoIcon w="120px" color="primary.500" />
        <CartIcon
          w="24px"
          h="24px"
          color="black"
          cursor="pointer"
          bg="none"
          aria-label="shoppoing-cart"
          _hover={{
            bg: 'none',
          }}
        />
      </Flex>
      <HomeHeaderDrawer
        isOpen={isOpen}
        onClose={onClose}
        bodyProps={cssByVariant.drawer}
      />
    </>
  );
};

export default HomeHeader;
