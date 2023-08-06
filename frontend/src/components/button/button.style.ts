import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean;
}

export const ButtonRoot = styled.button<ButtonProps>`
  background-color:
  ${({ disabled }) =>
    disabled ? "var(--gray-disabled)" : "var(--dark-purple)"};
  border: none;
  display: flex;
  height: 3.5rem;
  width: 100%;
  padding: 1rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;

  color: ${({ disabled }) =>
    disabled ? "var(--gray-text-disabled)" : "var(--white)"};

  & svg path {
    stroke: ${({ disabled }) =>
    disabled ? "var(--gray-text-disabled)" : "var(--white)"};
  }
`;
