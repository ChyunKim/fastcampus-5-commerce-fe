import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { RadiostarIcon } from 'generated/icons/CustomIcon';

interface ReviewContentProps {
  id: number;
  userId: number;
  nickname: string;
  rate: number;
  content: string;
  reviewmageSet: [];
  created: string;
}
interface ReviewComProps {
  list: ReviewContentProps[];
}
const ReviewContent = (props: ReviewComProps) => {
  console.log(props.list);

  const reviewcontent = props.list.map((ele: ReviewContentProps) => {
    const date = ele.created.substring(0, 10).replaceAll('-', '.');
    return (
      <Box key={ele.id}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading variant="titlesmall">{ele.nickname}</Heading>
          <Box>{rankReviwStar(ele.rate)}</Box>
        </Flex>
        <Text color="gray.600" fontSize="12px">
          {date}
        </Text>
        <Text mt="17px" mb="9px">
          {ele.content}
        </Text>
      </Box>
    );
  });
  return <Container p="0">{reviewcontent}</Container>;
};

export const rankReviwStar = (rank: number) => {
  const star = 5;
  let rankarr = [];
  for (let i = 0; i < rank; i++) {
    rankarr[i] = 'primary.500';
  }
  for (let i = rank; i < star; i++) {
    rankarr[i] = 'gray.400';
  }

  const starIcon = rankarr.map((ele) => {
    return <RadiostarIcon boxSize={4} color={ele} />;
  });
  return starIcon;
};

export default ReviewContent;
