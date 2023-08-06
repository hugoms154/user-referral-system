import { ReactNode } from "react";
import { ButtonRoot } from "./button.style";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon: ReactNode;
  label: string;
};

export const Button = ({ icon, label, ...rest }: ButtonProps) => {
  return (
    <ButtonRoot {...rest}>
      {label}
      {icon}
    </ButtonRoot>
  );
};
