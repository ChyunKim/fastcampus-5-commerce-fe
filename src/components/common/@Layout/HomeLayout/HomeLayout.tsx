import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import HomeFooter from './_fragments/HomeFooter';
import HomeHeader from './_fragments/HomeHeader';

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const HomeLayout = ({
  //
  header = <HomeHeader />,
  footer = <HomeFooter />,
  containerProps,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      <Container w="375px" p="0" {...containerProps}>
        {header}
        {content}
        {footer}
      </Container>
    </>
  );
};

export default HomeLayout;
