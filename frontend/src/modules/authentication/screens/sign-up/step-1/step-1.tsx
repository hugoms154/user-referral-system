import { useFormContext } from "react-hook-form";
import { Input } from "../../../../../components/form";
import { SignUpFormInput } from "../sign-up";

export const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormInput>();

  return (
    <>
      <Input
        label="E-mail"
        type="email"
        required
        error={errors.email?.message || ""}
        {...register("email")}
      />
    </>
  );
};
