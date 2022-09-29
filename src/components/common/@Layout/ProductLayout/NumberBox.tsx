import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { MinusIcon, ProductPlusIcon } from 'generated/icons/CustomIcon';

const NumberBox = () => {
  return (
    <Box bg="gray.200" p="10px" m="0 auto">
      <Text fontSize="16px" color="gray.600">
        바스 & 샴푸 | 120ml
      </Text>

      <Flex m="5px 0" justifyContent="space-between" alignItems="center">
        <Flex>
          <MinusIcon
            bg="white"
            borderLeftRadius="5px"
            w="25px"
            h="25px"
            border="1px solid"
            borderColor="gray.300"
          />
          <Box
            bg="white"
            color="gray.800"
            fontSize="12px"
            m="0 -1px"
            w="25px"
            h="25px"
            border="1px solid"
            borderColor="gray.300"
            textAlign="center"
            lineHeight="23px"
          >
            1
          </Box>
          <ProductPlusIcon
            bg="white"
            borderRightRadius="5px"
            w="25px"
            h="25px"
            border="1px solid"
            borderColor="gray.300"
          />
        </Flex>
        <Heading variant="title" color="gray.600">
          54,200원
        </Heading>
      </Flex>
    </Box>
  );
};
export default NumberBox;
