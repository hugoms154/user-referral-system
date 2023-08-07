import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../../components/form";
import { SignUpFormInput } from "../sign-up";

export const Step2 = () => {
  const { register, formState, trigger, watch } =
    useFormContext<SignUpFormInput>();

  useEffect(() => {
    trigger("password");
    trigger("confirmPassword");
  }, [trigger, watch("password"), watch("confirmPassword")]);

  return (
    <>
      <Input
        label="Digite a senha"
        type="password"
        required
        error={formState.errors.password?.message || ""}
        {...register("password")}
      />

      <Input
        label="Repita a senha"
        type="password"
        required
        error={formState.errors.confirmPassword?.message || ""}
        {...register("confirmPassword")}
      />
    </>
  );
};
