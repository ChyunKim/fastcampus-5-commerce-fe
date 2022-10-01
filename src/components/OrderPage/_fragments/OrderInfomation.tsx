import useOrderForm from '../_hooks/useOrderForm';
import OrderInfoForm from './OrderInfoForm';

const OrderInfomation = () => {
  const formData = useOrderForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username, phone, address }) => {
    console.log(`Order 정보: ${username}, ${phone},`);
  });
  return <OrderInfoForm formData={formData} onSubmit={onSubmit} />;
};

export default OrderInfomation;
