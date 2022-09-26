import { MY_IMAGES } from '@image';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import {
  CheckIcon,
  EllipseIcon,
  LinecircleIcon,
  ListarrowIcon,
  LogoIcon,
  PlusIcon,
  ProcessIcon,
} from 'generated/icons/CustomIcon';

const HomeMain = () => {
  return (
    <Container p="0">
      <Box pt="70px">
        <Heading variant="extraTitle" color="primary.500" textAlign="center">
          부풀려지는 가격 이제 그만!
        </Heading>
        <Box textAlign="center" p="10px 0" fontSize="20px">
          <Text>
            불합리한 <strong> 중간 유통 거품을 제거</strong>한
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
            이렇게 <strong>비교하세요!</strong>
          </Heading>
          <Text fontSize="20px">
            인코스런은 부담스러운
            <br />
            영유아 화장품의 <strong>가격거품을 제거해</strong>
            <br />
            <strong>투명한 가격</strong>을 만들어 갑니다.
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
        <Box w="375px" h="450px" bgImage="/images/bgevent.svg" p="100px 16px">
          <Flex>
            <Heading variant="extraTitle" color="primary.500" m="0">
              인코스런
            </Heading>
            <Heading variant="extraTitle" fontWeight="400" m="0">
              가입하고
            </Heading>
          </Flex>
          <Heading variant="extraTitle" m="0">
            전상품 1000원 혜택
          </Heading>
          <Heading variant="extraTitle" fontWeight="400" m="0">
            받아보세요.
          </Heading>
          <Flex mt="20px" alignItems="center">
            <Text fontSize="16px"> 이벤트상세보기</Text>
            <ListarrowIcon boxSize={6} />
          </Flex>
        </Box>
        <Box bgImage="/images/bgretangle.png" p="20px 16px">
          <Box bg="white" textAlign="center" pt="70px" pb="20px">
            <Heading variant="extraTitle">소중한 우리 아이를 위해</Heading>
            <Text>
              순수 자연유래 / 자연유래 유화제 / 자연유래
              <br /> 계면활성제 99.9% 타가는 EWG 그린등급 <br />
              성분 100% 만을 사용한 건강한 화장품입니다.
            </Text>
            <Button variant="orange" w="190px" m="30px 0">
              상품전체보기
            </Button>
            <VStack m="50px 0">
              <Image
                src={MY_IMAGES.IMAGES.PRODUCTIMG.src}
                alt={MY_IMAGES.IMAGES.PRODUCTIMG.alt}
              />
              <Text fontWeight="700" pb="30px">
                바스 & 샴푸
              </Text>
            </VStack>
            <VStack m="50px 0">
              <Image
                src={MY_IMAGES.IMAGES.PRODUCTIMG.src}
                alt={MY_IMAGES.IMAGES.PRODUCTIMG.alt}
              />
              <Text fontWeight="700" pb="30px">
                오일
              </Text>
            </VStack>
            <VStack m="50px 0">
              <Image
                src={MY_IMAGES.IMAGES.PRODUCTIMG.src}
                alt={MY_IMAGES.IMAGES.PRODUCTIMG.alt}
              />
              <Text fontWeight="700" pb="30px">
                파우더 로션
              </Text>
            </VStack>
          </Box>
        </Box>
        <Box p="80px 16px 100px" textAlign="center">
          <Heading variant="extraTitle">
            인코스런을 <strong>직접 사용해본</strong>
            <br />
            고객님의 솔직한 리뷰
          </Heading>
          <Flex>
            <Button variant="orange" w="53px" h="30px" fontSize="12px">
              전체
            </Button>
            <Button
              borderRadius="15px"
              w="83px"
              h="30px"
              fontSize="12px"
              bg="gray.200"
            >
              바스&샴푸
            </Button>
            <Button variant="orange" w="53px" h="30px" fontSize="12px">
              오일
            </Button>
            <Button variant="orange" w="53px" h="30px" fontSize="12px">
              로션
            </Button>
            <Button variant="orange" w="53px" h="30px" fontSize="12px">
              크림
            </Button>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};
export default HomeMain;
