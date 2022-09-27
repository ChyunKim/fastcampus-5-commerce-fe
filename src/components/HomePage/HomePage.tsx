import React from 'react';

import { BoxProps, Container } from '@chakra-ui/react';

import EvetContent from './_fragments/EvetContent';
import FirstContent from './_fragments/FirstContent';
import InfoContent from './_fragments/InfoContent';
import ReviewContent from './_fragments/ReviewContent';
import SecondContent from './_fragments/SecondContent';
import ThirdContent from './_fragments/ThirdCotent';

interface HomePageContentProps extends BoxProps {}

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return (
    <Container p="0" {...basisProps}>
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <EvetContent />
      <ReviewContent />
      <InfoContent />
    </Container>
  );
}

export default HomePageContent;
