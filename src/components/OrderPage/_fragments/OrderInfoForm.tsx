import { UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

import FormCustom from '@components/SignupPage/_fragments/FormCustom';

import { OrderProps } from '../_hooks/useOrderForm';

import {
  CardIcon,
  CheckBoxIcon,
  ChekedBoxIcon,
  CreditCheckIcon,
} from 'generated/icons/CustomIcon';

interface FormData extends BoxProps {
  formData: UseFormReturn<OrderProps>;
}
const OrderInfoForm = ({
  formData: {
    register,
    formState: { errors },
  },
  onSubmit,
  ...basicProps
}: FormData) => {
  return (
    <Container as="form" mb="80px" onSubmit={onSubmit} {...basicProps}>
      <Box>
        <Heading variant="title" mb="40px">
          회원정보입력
        </Heading>
        <FormCustom label="이름" errorText={errors.username?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('username')}
          />
        </FormCustom>
        <FormCustom label="핸드폰 번호" errorText={errors.phone?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('phone')}
          />
        </FormCustom>
        <FormCustom label="주소" errorText={errors.address?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            w="249px"
            {...register('address')}
          />
          <Button
            ml="10px"
            bg="primary.500"
            borderRadius="5px"
            color="white"
            fontSize="12px"
            w="84px"
            _hover={{
              bg: 'primary.500',
            }}
          >
            우편번호 검색
          </Button>
          <Input
            mt="10px"
            variant="formstyled"
            autoComplete="off"
            {...register('address')}
          />
        </FormCustom>
        <FormCustom label="배송요청사항" errorText={errors.address?.message}>
          <Input
            mt="10px"
            variant="formstyled"
            autoComplete="off"
            {...register('address')}
          />
        </FormCustom>
      </Box>
      <Box>
        <Flex justifyContent="space-between" alignItems="center" mb="40px">
          <Heading variant="title">배송지 정보</Heading>
          <HStack>
            <ChekedBoxIcon />
            <Text color="gray.600">주문자 정보와 동일</Text>
          </HStack>
        </Flex>
        <FormCustom label="이름" errorText={errors.username?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('username')}
          />
        </FormCustom>
        <FormCustom label="핸드폰 번호" errorText={errors.phone?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('phone')}
          />
        </FormCustom>
        <FormCustom label="주소" errorText={errors.address?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            w="249px"
            {...register('address')}
          />
          <Button
            ml="10px"
            bg="primary.500"
            borderRadius="5px"
            color="white"
            fontSize="12px"
            w="84px"
            _hover={{
              bg: 'primary.500',
            }}
          >
            우편번호 검색
          </Button>
          <Input
            mt="10px"
            variant="formstyled"
            autoComplete="off"
            {...register('address')}
          />
        </FormCustom>
        <FormCustom label="배송요청사항" errorText={errors.address?.message}>
          <Input
            mt="10px"
            variant="formstyled"
            autoComplete="off"
            {...register('address')}
          />
        </FormCustom>
      </Box>
      <Box mt="90px">
        <Heading
          variant="title"
          borderBottom="1px solid"
          p="10px"
          borderColor="gray.200"
        >
          결제수단
        </Heading>
        <Flex
          p="30px 0"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <CreditCheckIcon mr="10px" />
          <CardIcon boxSize={50} />
          <Text>신용카드 결제</Text>
        </Flex>
        <Heading variant="title" m="30px 0">
          최종 결제금액
        </Heading>
        <Flex
          fontSize="16px"
          color="gray.600"
          justifyContent="space-between"
          m="10px 0"
        >
          <Text>총 상품금액</Text>
          <Text>108,000 원</Text>
        </Flex>
        <Flex
          fontSize="16px"
          color="gray.600"
          justifyContent="space-between"
          m="20px 0"
        >
          <Text>총 배송비</Text>
          <Text>0 원</Text>
        </Flex>
        <Flex
          fontSize="16px"
          justifyContent="space-between"
          p="20px 0"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Text>결제금액</Text>
          <Heading variant="title" color="primary.500">
            108,000원
          </Heading>
        </Flex>
        <HStack m="20px 0" alignItems="center">
          <CheckBoxIcon />
          <Text color="gray.600">개인정보 수집 이용 동의(필수)</Text>
        </HStack>
      </Box>
      <Button variant="orange" type="submit" mt="40px">
        결제하기{' '}
      </Button>
    </Container>
  );
};
export default OrderInfoForm;
