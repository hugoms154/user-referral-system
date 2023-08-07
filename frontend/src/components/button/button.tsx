import { ReactNode } from "react";
import { ButtonRoot, ButtonVariant } from "./button.style";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  label: string;
  $textCenter?: boolean;
  $disabled?: boolean;
  $variant?: ButtonVariant;
};

export const Button = ({
  rightIcon,
  leftIcon,
  label,
  $variant = "default",
  ...rest
}: ButtonProps) => {
  return (
    <ButtonRoot $variant={$variant} {...rest}>
      {leftIcon && <>{leftIcon}</>}
      {label}
      {rightIcon && <>{rightIcon}</>}
    </ButtonRoot>
  );
};
