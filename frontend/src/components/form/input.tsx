import {
  ForwardRefRenderFunction,
  HTMLProps,
  forwardRef,
  useState,
} from "react";
import { Eye } from "../../assets/eye";
import { EyeOff } from "../../assets/eye-off";
import * as Typography from "../typography";
import * as S from "./input.style";

type TypesInput = "text" | "password" | "email" | "date" | "number";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  type?: TypesInput;
  label: string;
  error: string;
  link?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, label, error = "", link, ...rest },
  ref
) => {
  const [customType, setCustomType] = useState(type);

  const [showOutline, setShowOutline] = useState(false);

  function handleFocus() {
    setShowOutline(true);
  }

  function handleBlur() {
    setShowOutline(false);
  }

  return (
    <>
      <S.InputTextContainer>
        <Typography.InputLabel>{label}</Typography.InputLabel>
        {link && <S.LinkText>{link}</S.LinkText>}
      </S.InputTextContainer>

      <S.InputRoot
        error={error.length > 0}
        onBlur={handleBlur}
        onFocus={handleFocus}
        outline={showOutline}
      >
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
