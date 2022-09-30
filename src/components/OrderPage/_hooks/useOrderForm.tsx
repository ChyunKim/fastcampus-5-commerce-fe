import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export interface OrderProps {
  username: string;
  phone: number;
}

export const formSchema = yup.object().shape({
  username: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '최소 2자 이상 입력해주세요'),
  phone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test(
      'isNumber',
      '정확한 핸드폰 번호를 입력해주세요.',
      (val) => !Number.isNaN(Number(val)),
    ),
});

const useOrderForm = (options?: UseFormProps<OrderProps>) => {
  return useForm<OrderProps>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useOrderForm;
