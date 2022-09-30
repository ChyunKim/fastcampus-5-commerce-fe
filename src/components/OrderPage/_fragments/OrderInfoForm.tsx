import { UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Container,
  Heading,
  Input,
} from '@chakra-ui/react';

import FormCustom from '@components/SignupPage/_fragments/FormCustom';

import { OrderProps } from '../_hooks/useOrderForm';

import { ProfileIcon } from 'generated/icons/CustomIcon';

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
        <Heading variant="title">회원정보입력</Heading>
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
      </Box>
      <Button variant="orange" type="submit">
        결제하기{' '}
      </Button>
    </Container>
  );
};
export default OrderInfoForm;
