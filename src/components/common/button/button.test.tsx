import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button.component';

describe('Button', () => {
  const mock = vi.fn();

  beforeEach(() => {
    render(<Button onClick={mock}>foo</Button>);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders a Button component', async () => {
    const button = screen.getByText('foo');
    expect(button).toMatchSnapshot();
  });

  it('fires callback when clicked', async () => {
    const button = screen.getByText('foo');
    fireEvent.click(button);
    expect(mock).toHaveBeenCalledOnce();
  });
});
