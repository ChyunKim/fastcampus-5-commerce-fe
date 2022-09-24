import useSignForm from '../_hooks/useSignForm';
import FormView from './Formview';

const FormPage = () => {
  const formData = useSignForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ username, nickname, phone, email, gender, age }) => {
      console.log(
        `form 정보: ${username}, ${nickname}, ${phone}, ${email}, ${gender}, ${age}`,
      );
    },
  );
  return <FormView formData={formData} onSubmit={onSubmit} />;
};

export default FormPage;
