import styled from "styled-components";

export const H1 = styled.h1<{ center?: boolean }>`
  color: var(--dark-purple);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const Body = styled.p`
  color: var(--gray);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: -0.0037rem;
`;

export const BodySecondary = styled.p<{
  $disable?: boolean;
  $regular?: boolean;
}>`
  color: ${({ $disable }) =>
    $disable ? "var(--light-gray)" : "var(--dark-purple)"};
  font-weight: ${({ $regular }) => ($regular ? "500" : "400")};
  font-size: 1rem;
  font-style: normal;
  line-height: 1.5rem;
`;

export const StrongBodySecondary = styled.span`
  color: var(--dark-purple);
  font-weight: 600;
  font-size: 1rem;
  font-style: normal;
  line-height: 1.5rem;
`;

export const LinkText = styled.a`
  color: var(--link);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  cursor: pointer;

  &:hover {
    color: var(--dark-purple);
    transition: 0.3s linear;
  }
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
