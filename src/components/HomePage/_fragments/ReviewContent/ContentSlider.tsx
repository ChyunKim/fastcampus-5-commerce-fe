import Slider from 'react-slick';

import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import {
  HomePageProps,
  ReviewContentProps,
} from '@components/HomePage/HomePage';
import { rankReviwStar } from '@components/ProductDetailPage/_fragments/ReviewContent';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ReviewProps {
  results: ReviewContentProps[];
}
const ReviewSlider = (props: HomePageProps) => {
  const reviewlist = props.list.results;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };
  const content = reviewlist.map((ele) => {
    const date = ele.created.substring(0, 10).replaceAll('-', '.');
    return (
      <Box
        borderRadius="10px"
        boxShadow="0 0px 10px 0 #1A1A1A20"
        p="20px"
        textAlign="left"
        mr="20px"
        key={ele.id}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Heading variant="titlesmall">{ele.nickname}</Heading>
          {rankReviwStar(ele.rate)}
        </Flex>
        <Text color="gray.700" fontSize="12px">
          {date}
        </Text>
        <Text
          w="auto"
          h="225px"
          fontSize="16px"
          mt="30px"
          textOverflow="ellipsis"
          lineHeight="28px"
        >
          {ele.content}
        </Text>
        <Box
          h="0"
          border="1px solid"
          borderColor="gray.300"
          m="20px 0"
          bg="gray.300"
        />
        <Flex justifyContent="space-between">
          <Box borderRadius="5px" w="80px" h="80px" />
          <Box borderRadius="5px" w="80px" h="80px" />
          <Box borderRadius="5px" w="80px" h="80px" />
        </Flex>
      </Box>
    );
  });
  return <Slider {...settings}>{content}</Slider>;
};
export default function ContentSlider(props: HomePageProps) {
  return (
    <Container m="10px 0" pl="16px">
      <ReviewSlider list={props.list} />
    </Container>
  );
}
