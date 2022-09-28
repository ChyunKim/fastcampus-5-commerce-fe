import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { RadiostarIcon } from 'generated/icons/CustomIcon';

const ReviewContent = () => {
  return (
    <Container p="0">
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading variant="titlesmall">incourse.run</Heading>
          <Box>
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="primary.500" />
            <RadiostarIcon boxSize={4} color="gray.400" />
          </Box>
        </Flex>
        <Text color="gray.600" fontSize="12px">
          2021.03.29
        </Text>
        <Text mt="17px" mb="9px">
          순해서 아이피부에도 자극없이 사용할 수 있어요!
        </Text>
      </Box>
    </Container>
  );
};

export default ReviewContent;
