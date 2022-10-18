import { useRouter } from 'next/router';
import React from 'react';

import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import { useGetUserMeQuery } from '@apis/user/UserApi.query';

import { ROUTES } from '@constants/routes';
import { getToken } from '@utils/localStorage/token';

const UserWithdrawalPage = () => {
  const { data } = useGetUserMeQuery({
    variables: { accessToken: getToken()?.access! },
  });
  const [value, setValue] = React.useState('아이디 변경(재가입)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <Container mt="130px">
      <Heading variant="titlelarge">회원탈퇴</Heading>
      <Box p="18px 0" mt="80px">
        회원 탈퇴 시 개인 정보 및 인코스런에서 만들어진 모든 데이터는
        삭제됩니다. 한 번 삭제된 정보는 복구가 불가능합니다.
      </Box>
      <Box p="14px 0">
        <Heading variant="title">회원정보</Heading>
      </Box>
      <Box>
        <HStack mb="10px">
          <Text w="80px" mr="20px">
            이름
          </Text>
          <Text color="gray.700"> {data?.name}</Text>
        </HStack>
        <HStack mb="10px">
          <Text w="80px" mr="20px">
            핸드폰번호
          </Text>
          <Text color="gray.700">
            {' '}
            {data?.phone.slice(0, 3)}-{data?.phone.slice(3, 7)}-
            {data?.phone.slice(7, 11)}
          </Text>
        </HStack>
        <HStack mb="20px">
          <Text w="80px" mr="20px">
            이메일주소
          </Text>
          <Text color="gray.700"> {data?.email}</Text>
        </HStack>
      </Box>
      <Box p="14px 0">
        <Heading variant="title">탈퇴사유</Heading>
      </Box>
      <RadioGroup onChange={setValue} value={value}>
        <Stack>
          <Radio size="md" value="아이디 변경(재가입)" colorScheme="orange">
            아이디 변경(재가입)
          </Radio>
          <Radio size="md" value="낮은 구매 빈도" colorScheme="orange">
            낮은 구매 빈도
          </Radio>
          <Radio
            size="md"
            value="서비스 및 고객지원 불만족"
            colorScheme="orange"
          >
            서비스 및 고객지원 불만족
          </Radio>
          <Radio size="md" value="타 브랜드 이용" colorScheme="orange">
            타 브랜드 이용
          </Radio>
          <Radio size="md" value="기타" colorScheme="orange">
            기타
          </Radio>
          <Input
            variant="formstyled"
            placeholder="사유를 입력하세요."
            fontSize="16px"
          ></Input>
        </Stack>
      </RadioGroup>
      <Box mt="40px" p="14px 0">
        <Heading variant="title">인코스런을 입력하세요.</Heading>
      </Box>
      <Input
        variant="formstyled"
        placeholder="인코스런"
        fontSize="16px"
      ></Input>
      <HStack mt="80px" mb="30px">
        <Button
          variant="white_orange"
          onClick={() => router.push(ROUTES.MYACCOUNT.MAIN)}
        >
          취소
        </Button>
        <Button variant="orange" onClick={onOpen}>
          탈퇴하기
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay w="375px" />
          <ModalContent w="343px" h="300px">
            <Center>
              <VStack mt="110px">
                <Heading variant="title" mb="80px">
                  탈퇴가 완료되었습니다.
                </Heading>
                <Button variant="orange" onClick={onClose}>
                  확인
                </Button>
              </VStack>
            </Center>
          </ModalContent>
        </Modal>
      </HStack>
    </Container>
  );
};

export default UserWithdrawalPage;
