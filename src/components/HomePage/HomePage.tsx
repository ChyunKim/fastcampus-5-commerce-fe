import React from 'react';

import { BoxProps, Container } from '@chakra-ui/react';

import EvetContent from './_fragments/EvetContent';
import FirstContent from './_fragments/FirstContent';
import InfoContent from './_fragments/InfoContent';
import ReviewContent from './_fragments/ReviewContent/ReviewContent';
import SecondContent from './_fragments/SecondContent';
import ThirdContent from './_fragments/ThirdCotent';

export interface ReviewContentProps {
  id: number;
  userId: number;
  nickname: string;
  productId: number;
  orderItemId: number;
  rate: number;
  content: string;
  reviewimageSet: [];
  created: string;
}

export interface ApiProps {
  results: ReviewContentProps[];
}
export interface HomePageProps {
  list: ApiProps;
}
function HomePageContent(props: HomePageProps) {
  return (
    <Container p="0">
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <EvetContent />
      <ReviewContent list={props.list} />
      <InfoContent />
    </Container>
  );
}

export default HomePageContent;
