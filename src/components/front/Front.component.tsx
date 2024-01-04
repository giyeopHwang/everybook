import SignInForm from './sign-in-form/sign-in-form.component';
import { Container } from '@mui/material';
import { FrontContainer, Title } from './front.styles';

const Front = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <FrontContainer bgcolor="primary.dark">
        <Title color="primary.contrastText">모두의 가계부</Title>
        <SignInForm />
      </FrontContainer>
    </Container>
  );
};

export default Front;
