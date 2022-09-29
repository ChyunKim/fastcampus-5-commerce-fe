import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import ContentSlider from './ContentSlider';
import HeaderSlider from './HeaderSlider';

import { CallIcon, RadiostarIcon } from 'generated/icons/CustomIcon';

const ReviewContent = () => {
  return (
    <Box p="80px 0px 120px" textAlign="center">
      <Heading variant="extraTitle">
        인코스런을 <strong>직접 사용해본</strong>
        <br />
        고객님의 솔직한 리뷰
      </Heading>
      <HeaderSlider />
      <ContentSlider />
      <CallIcon w="70px" h="70px" float="right" mt="30px" mr="-10px" />
    </Box>
  );
};

export default ReviewContent;
