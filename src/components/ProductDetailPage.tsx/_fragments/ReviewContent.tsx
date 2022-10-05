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
          <Box>
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="gray.400" />
          </Box>
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

export default ReviewContent;
