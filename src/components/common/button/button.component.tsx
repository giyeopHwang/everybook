import { MouseEvent } from 'react';
import { StyledButton } from './button.styles';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick = () => {} }: ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick();
  };

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
