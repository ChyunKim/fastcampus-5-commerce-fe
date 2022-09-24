import { Flex, IconButton, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import MenuIcon from '@components/common/@Icons/System/Menu';

import { LAYOUT } from '@constants/layout';

import { HOME_HEADER_VARIANTS, HomeHeaderVariantType } from './HomeHeader.data';
import HomeHeaderDrawer from './_fragments/HomeHeaderDrawer';

import { CartIcon, LogoIcon } from 'generated/icons/MyIcons';

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
        <IconButton
          color="black"
          icon={<MenuIcon w="24px" h="24px" />}
          onClick={onOpen}
          cursor="pointer"
          bg="none"
          aria-label="btn-toggle-drawer"
        />
        <LogoIcon w="120px" color="primary.500" />
        <IconButton
          color="black"
          icon={<CartIcon w="24px" h="24px" />}
          onClick={onOpen}
          cursor="pointer"
          bg="none"
          aria-label="btn-toggle-drawer"
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
