import React from 'react';

import { BoxProps, Container } from '@chakra-ui/react';

import HomeMain from '@components/common/@Layout/HomeLayout/_fragments/HomeMain';

import FirstContent from './_fragments/FirstContent';

interface HomePageContentProps extends BoxProps {}

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return (
    <Container p="0" {...basisProps}>
      <FirstContent />
      <HomeMain />
    </Container>
  );
}

export default HomePageContent;
