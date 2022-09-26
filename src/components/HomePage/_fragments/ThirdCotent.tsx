import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import {
  CheckIcon,
  LinecircleIcon,
  LogoIcon,
  ProcessIcon,
} from 'generated/icons/CustomIcon';

const ThirdContent = () => {
  return (
    <>
      <Box pt="70px">
        <Heading variant="extraTitle" color="primary.500" textAlign="center">
          부풀려지는 가격 이제 그만!
        </Heading>
        <Box textAlign="center" p="10px 0" fontSize="20px">
          <Text>
            불합리한{' '}
            <Text as="span" fontWeight="700">
              {' '}
              중간 유통 거품을 제거
            </Text>
            한
            <br />
            인코스런만의 투명한 유통혁신
          </Text>
          <Box pt="60px">
            <Flex pl="75px" mb="20px">
              <ProcessIcon w="150px" h="720px" />
              <Box ml="10px" color="gray.800" p="35px 0">
                <Flex justifyContent="center" ml="-10px">
                  <CheckIcon boxSize={6} color="primary.500" />
                  <Heading variant="title">STEP 1</Heading>
                </Flex>
                <Text fontSize="16px" pb="125px">
                  제조공장의
                  <br /> 제조 및 개발비용
                </Text>
                <Flex justifyContent="center">
                  <Heading variant="title" color="gray.400">
                    STEP 2
                  </Heading>
                </Flex>
                <Text fontSize="16px" color="gray.400" pb="140px">
                  물류 및 운송비용
                </Text>
                <Flex justifyContent="center">
                  <Heading variant="title" color="gray.400">
                    STEP 3
                  </Heading>
                </Flex>
                <Text fontSize="16px" color="gray.400" pb="140px">
                  결제 수수료
                </Text>
                <Flex justifyContent="center" ml="-10px">
                  <CheckIcon boxSize={6} color="primary.500" />
                  <Heading variant="title">STEP 4</Heading>
                </Flex>
                <Text fontSize="16px">소비자 가격</Text>
              </Box>
            </Flex>
            <LinecircleIcon color="primary.500" w="375px" h="50px" />
          </Box>
        </Box>
      </Box>
      <Box textAlign="center">
        <Heading variant="title" color="primary.500" m="20px 0">
          SAVE MONEY
        </Heading>
        <Box m="10px 0">
          <Heading variant="title" color="primary.500">
            * 온라인 직접 판매
          </Heading>
          <Text fontSize="16px">
            인코스런은 온라인으로만 직접판매하여,
            <br /> 더 낮은 가격을 만들어냅니다.
          </Text>
        </Box>
      </Box>
      <Box mt="80px" mb="70px" textAlign="center">
        <Heading variant="extraTitle" fontWeight="400" mb="20px">
          이렇게{' '}
          <Text as="span" fontWeight="700">
            비교하세요!
          </Text>
        </Heading>
        <Text fontSize="20px">
          인코스런은 부담스러운
          <br />
          영유아 화장품의{' '}
          <Text
            as="u"
            fontWeight="700"
            textUnderlineOffset="-5px"
            textDecorationColor="primary.500"
            textDecorationThickness="10px"
          >
            가격거품을 제거해
          </Text>
          <br />
          <Text
            as="u"
            fontWeight="700"
            textUnderlineOffset="-5px"
            textDecorationColor="primary.500"
            textDecorationThickness="10px"
          >
            투명한 가격
          </Text>
          을 만들어 갑니다.
          <br />
        </Text>
        <Flex justifyContent="center" mt="70px" alignItems="end">
          <VStack>
            <Box w="150px" h="360px" bg="gray.400" pt="20px" m="0 10px">
              <Button
                variant="orange"
                w="95px"
                h="30px"
                fontSize="12px"
                bg="gray.700"
              >
                2~30,000원
              </Button>
            </Box>
            <Text color="gray.700">시중 주요브랜드</Text>
          </VStack>
          <VStack>
            <Box w="150px" h="120px" bg="#FFF3E0" pt="20px" m="0 10px">
              <Button
                variant="orange"
                w="74px"
                h="30px"
                fontSize="12px"
                mb="10px"
              >
                9,900원
              </Button>
              <LogoIcon w="104px" h="14px" color="primary.500" />
            </Box>
            <Text color="primary.500" fontWeight="700">
              인코스런
            </Text>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default ThirdContent;
