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
  $variant?: ButtonVariant;
  $fullWidth?: boolean;
};

export const Button = ({
  rightIcon,
  leftIcon,
  label,
  $variant = "default",
  $fullWidth = false,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonRoot $variant={$variant} $fullWidth={$fullWidth} {...rest}>
      {leftIcon && <>{leftIcon}</>}
      {label}
      {rightIcon && <>{rightIcon}</>}
    </ButtonRoot>
  );
};
