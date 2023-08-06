import styled from "styled-components";

export const H1 = styled.h1<{ center?: boolean }>`
  color: var(--dark-purple);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;

export const Body = styled.p`
  color: var(--gray);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: -0.0037rem;
`;

interface InputLabelProps {
  hasError?: boolean;
}

export const InputLabel = styled.label<InputLabelProps>`
  color: var(--dark-purple);
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const InputValue = styled.label`
  color: var(--dark-purple);
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const InputPlaceholder = styled.label`
  pointer-events: none;
  color: var(--light-gray);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;
