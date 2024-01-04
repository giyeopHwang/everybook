import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const SignInForm = () => {
  return (
    <Button component={Link} to="/dashboard" variant="contained" color="info">
      입장하기
    </Button>
  );
};

export default SignInForm;
