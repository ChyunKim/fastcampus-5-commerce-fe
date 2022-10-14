import Link from 'next/link';
import { useRouter } from 'next/router';
import { UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

import { FormProps } from '../_hooks/useSignForm';
import AgreeSignup from './AgreeSignup';
import FormCustom from './FormCustom';

import { ProfileIcon } from 'generated/icons/CustomIcon';

interface FormData extends BoxProps {
  formData: UseFormReturn<FormProps>;
}
const FormView = ({
  formData: {
    register,
    formState: { errors },
  },
  onSubmit,
  ...basicProps
}: FormData) => {
  const router = useRouter();
  return (
    <Box as="form" p="50px 0" onSubmit={onSubmit} {...basicProps}>
      <Box>
        <Heading variant="title">회원정보입력</Heading>
        <ProfileIcon w="343px" h="70px" m="40px 0" />
        <FormCustom label="이름" errorText={errors.username?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('username')}
          />
        </FormCustom>
        <FormCustom label="닉네임" errorText={errors.nickname?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('nickname')}
          />
        </FormCustom>
        <FormCustom label="핸드폰 번호" errorText={errors.phone?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('phone')}
          />
        </FormCustom>
        <FormCustom label="이메일 주소" errorText={errors.email?.message}>
          <Input
            variant="formstyled"
            autoComplete="off"
            {...register('email')}
          />
        </FormCustom>
      </Box>
      <Box p="30px 0">
        <Heading variant="title">추가정보입력(선택)</Heading>

        <FormCustom mt="40px" label="성별">
          <Select
            {...register('gender')}
            variant="flushed"
            placeholder="성별을 선택하세요."
            borderBottom="2px solid"
            borderColor="gray.400"
            color="gray.400"
          >
            <option value="female">여자</option>
            <option value="male">남자</option>
          </Select>
        </FormCustom>

        <FormCustom mt="50px" label="연령대">
          <Select
            {...register('age')}
            variant="flushed"
            placeholder="연령대를 선택하세요."
            borderBottom="2px solid"
            borderColor="gray.400"
            color="gray.400"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
          </Select>
        </FormCustom>
      </Box>
      {router.asPath !== ROUTES.MYACCOUNT.EDITUSERINFO && <AgreeSignup />}
      {router.asPath !== ROUTES.MYACCOUNT.EDITUSERINFO ? (
        <Link href={ROUTES.HOME}>
          <Button variant="orange" type="submit">
            회원가입 완료
          </Button>
        </Link>
      ) : (
        <Flex>
          <Button variant="white_orange" mr="10px">
            취소
          </Button>
          <Button variant="orange" type="submit">
            저장
          </Button>
        </Flex>
      )}
    </Box>
  );
};
export default FormView;
