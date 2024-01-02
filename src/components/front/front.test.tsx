import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Front from './front.component';

describe('Front', () => {
  it('renders Front component', () => {
    const front = render(<Front />, { wrapper: BrowserRouter });
    expect(front).toMatchSnapshot();

    const title = screen.getByText('모두의 가계부');
    expect(title).toBeInTheDocument();
  });
});
