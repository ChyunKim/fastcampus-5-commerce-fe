import { useRouter } from 'next/router';

import { usePostRegisterMutation } from '@apis/user/UserApi.mutation';

import useSignForm from '../_hooks/useSignForm';
import FormView from './Formview';

const FormPage = () => {
  const formData = useSignForm();
  const router = useRouter();
  const { mutateAsync: userRegister } = usePostRegisterMutation();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ username, nickname, phone, email, gender, age }) => {
      console.log(
        `form 정보: ${username}, ${nickname}, ${phone}, ${email}, ${gender}, ${age}`,
      );

      if (!gender) {
        gender = 'female';
      }

      if (!age) {
        age = 20;
      }

      if (typeof router.query.socialToken === 'string') {
        const data = {
          socialToken: router.query.socialToken,
          email: email,
          phone: String(phone),
          name: username,
          nickname: nickname,
          profilePath: '/',
          gender: gender,
          age: Number(age),
          marketingAdAgree: true,
        };
        userRegister(data)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    },
  );
  return <FormView formData={formData} onSubmit={onSubmit} />;
};

export default FormPage;
