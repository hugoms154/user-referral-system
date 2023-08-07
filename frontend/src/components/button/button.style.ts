import styled from "styled-components";

export type ButtonVariant = keyof typeof variants;
interface ButtonProps {
  $disabled?: boolean;
  $textCenter?: boolean;
  $variant: ButtonVariant;
}

export const ButtonRoot = styled.button<ButtonProps>`
  background-color: ${({ $disabled, $variant }) =>
    $disabled ? "var(--gray-disabled)" : variants[$variant].backgroundColor};
  border: none;
  display: flex;
  width: 100%;
  padding: 1rem 1.25rem;
  justify-content: ${({ $textCenter }) =>
    $textCenter ? "center" : "space-between"};
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  cursor: pointer;

  color: ${({ $disabled, $variant }) =>
    $disabled ? "var(--gray-text-disabled)" : variants[$variant].color};

  & svg path {
    stroke: ${({ $disabled }) => $disabled && "var(--gray-text-disabled)"};
  }
`;

const variants = {
  default: {
    backgroundColor: "var(--dark-purple)",
    color: "var(--white)",
  },
  link: {
    backgroundColor: "transparent",
    color: "var(--dark-purple)",
  },
} as const;
