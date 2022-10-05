import { Container, Heading } from '@chakra-ui/react';

import FormPage from '@components/SignupPage/_fragments/FormPage';

const EditUserInfoPage = () => {
  return (
    <Container mt="130px" mb="30px">
      <Heading variant="titlelarge">회원정보수정</Heading>
      <FormPage />
    </Container>
  );
};

export default EditUserInfoPage;
