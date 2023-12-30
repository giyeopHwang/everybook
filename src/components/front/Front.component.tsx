import SignInForm from './sign-in/SignIn.component';
import { FrontContainer, Title } from './Front.styles';

const Front = () => {
  return (
    <FrontContainer>
      <Title>모두의 가계부</Title>
      <SignInForm />
    </FrontContainer>
  );
};

export default Front;
