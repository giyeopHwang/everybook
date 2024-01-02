import { renderWithWrapper } from '@/test/test-utils';
import SignInForm from './sign-in-form.component';

describe('SignInForm', () => {
  it('renders SignInForm component', () => {
    const signInForm = renderWithWrapper(<SignInForm />);
    expect(signInForm).toMatchSnapshot();
  });
});
