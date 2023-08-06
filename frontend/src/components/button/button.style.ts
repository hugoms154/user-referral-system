import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean;
}

export const ButtonRoot = styled.button<ButtonProps>`
  background-color: ${({ disabled }) =>
    disabled ? "var(--gray-disabled)" : "var(--dark-purple)"};
  border: none;
  display: flex;
  width: 100%;
  padding: 1rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  cursor: pointer;

  color: ${({ disabled }) =>
    disabled ? "var(--gray-text-disabled)" : "var(--white)"};

  & svg path {
    stroke: ${({ disabled }) => disabled && "var(--gray-text-disabled)"};
  }
`;
