import {
  ForwardRefRenderFunction,
  HTMLProps,
  forwardRef,
  useState,
} from "react";
import * as S from "./input.style";
import * as Typography from "../typography";
import { EyeOff } from "../../assets/eye-off";
import { Eye } from "../../assets/eye";

type TypesInput = "text" | "password" | "email" | "date" | "number";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  type?: TypesInput;
  label: string;
  error?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, label, error = false, ...rest },
  ref
) => {
  const [customType, setCustomType] = useState(type);

  return (
    <>
      <Typography.InputLabel>{label}</Typography.InputLabel>
      <S.InputRoot error={error}>
        <input {...rest} type={customType} ref={ref} />

        {type === "password" && (
          <S.ButtonPassword
            type="button"
            onClick={() =>
              setCustomType((prev) =>
                prev === "password" ? "text" : "password"
              )
            }
          >
            {customType !== "password" ? <EyeOff /> : <Eye />}
          </S.ButtonPassword>
        )}
      </S.InputRoot>
    </>
  );
};

export const Input = forwardRef(InputBase);
