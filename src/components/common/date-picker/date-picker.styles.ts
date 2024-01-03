import styled from 'styled-components';

export const DatePickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
`;

export const DatePickerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
`;

type DateInputProps = {
  $error: string | null;
};

export const DateInput = styled.input<DateInputProps>`
  border: ${({ $error }) => {
    return $error
      ? '1px solid var(--theme-light-border-error)'
      : '1px solid var(--theme-light-border)';
  }};
  width: 120px;
  height: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    border: 1px solid var(--theme-light-border-highlight);
  }
`;
