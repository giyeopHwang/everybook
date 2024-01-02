import { render, fireEvent, screen } from '@testing-library/react';
import Button from './button.component';

describe('Button', () => {
  it('renders a Button component', async () => {
    const button = render(<Button>foo</Button>);
    expect(button).toMatchSnapshot();

    const buttonByText = screen.getByText('foo');
    expect(buttonByText).toBeInTheDocument();
  });

  it('fires callback when clicked', async () => {
    const mock = vi.fn();
    render(<Button onClick={mock}>foo</Button>);

    const button = screen.getByText('foo');
    fireEvent.click(button);
    expect(mock).toHaveBeenCalledOnce();
  });
});
