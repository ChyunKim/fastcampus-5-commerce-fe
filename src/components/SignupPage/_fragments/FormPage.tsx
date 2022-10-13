import { usePostRegisterMutation } from '@apis/user/UserApi.mutation';

import useSignForm from '../_hooks/useSignForm';
import FormView from './Formview';

const FormPage = () => {
  const formData = useSignForm();
  const { mutateAsync: userRegister } = usePostRegisterMutation();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ username, nickname, phone, email, gender, age }) => {
      console.log(
        `form 정보: ${username}, ${nickname}, ${phone}, ${email}, ${gender}, ${age}`,
      );

      const data = {
        socialToken: '',
        email: email,
        phone: String(phone),
        name: username,
        nickname: nickname,
        profilePath: '/',
        gender: 'male',
        age: 10,
        marketingAdAgree: true,
      };
      userRegister(data);
    },
  );
  return <FormView formData={formData} onSubmit={onSubmit} />;
};

export default FormPage;
