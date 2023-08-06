import { ReactNode } from "react";
import { ButtonRoot } from "./button.style";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  label: string;
};

export const Button = ({
  rightIcon,
  leftIcon,
  label,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonRoot {...rest}>
      {leftIcon && <>{leftIcon}</>}
      {label}
      {rightIcon && <>{rightIcon}</>}
    </ButtonRoot>
  );
};
