import styled from "styled-components";

export type ButtonVariant = keyof typeof variants;
interface ButtonProps {
  $textCenter?: boolean;
  $variant: ButtonVariant;
  $fullWidth: boolean;
}

export const ButtonRoot = styled.button<ButtonProps>`
  background-color: ${({ disabled, $variant }) =>
    disabled ? "var(--gray-disabled)" : variants[$variant].backgroundColor};
  border: none;
  display: flex;
  ${({ $fullWidth }) => $fullWidth && "width: 100%"};
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  justify-content: ${({ $textCenter }) =>
    $textCenter ? "center" : "space-between"};
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  cursor: pointer;

  color: ${({ disabled, $variant }) =>
    disabled ? "var(--gray-text-disabled)" : variants[$variant].color};

  & svg path {
    stroke: ${({ disabled }) => disabled && "var(--gray-text-disabled)"};
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
  ghost: {
    backgroundColor: "var(--gray-disabled)",
    color: "var(--dark-purple)",
  },
} as const;
