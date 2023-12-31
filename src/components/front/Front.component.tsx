import SignInForm from './sign-in-form/sign-in-form.component';
import { FrontContainer, Title } from './front.styles';

const Front = () => {
  return (
    <FrontContainer>
      <Title>모두의 가계부</Title>
      <SignInForm />
    </FrontContainer>
  );
};

export default Front;
