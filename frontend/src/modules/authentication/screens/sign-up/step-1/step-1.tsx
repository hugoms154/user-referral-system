import { useFormContext } from "react-hook-form";
import { Input } from "../../../../../components/form";
import * as Typography from "../../../../../components/typography";
import { SignUpFormInput } from "../sign-up";
import * as StepStyle from "../steps.style";

export const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormInput>();

  return (
    <StepStyle.Root>
      <StepStyle.LinkWrapper>
        <Typography.LinkText>E-mail</Typography.LinkText>
      </StepStyle.LinkWrapper>
      <StepStyle.TitleWrapper>
        <Typography.H1>Primeiro, informe seu e-mail</Typography.H1>
      </StepStyle.TitleWrapper>
      <StepStyle.DescriptionWrapper>
        <Typography.BodySecondary>
          Você usará o e-mail para efetuar o seu login.
        </Typography.BodySecondary>
      </StepStyle.DescriptionWrapper>
      <StepStyle.InputWrapper>
        <Input
          label="Seu e-mail"
          type="email"
          error={errors.email?.message || ""}
          {...register("email")}
        />
      </StepStyle.InputWrapper>
    </StepStyle.Root>
  );
};
