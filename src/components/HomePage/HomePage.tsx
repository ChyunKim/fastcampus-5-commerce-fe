import React from 'react';

import { BoxProps, Container } from '@chakra-ui/react';

import HomeMain from '@components/common/@Layout/HomeLayout/_fragments/HomeMain';

interface HomePageContentProps extends BoxProps {}

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return (
    <Container p="0" {...basisProps}>
      <HomeMain />
    </Container>
  );
}

export default HomePageContent;
