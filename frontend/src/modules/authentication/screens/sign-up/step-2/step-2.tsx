import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Warning } from "../../../../../assets/warning";
import { Input } from "../../../../../components/form";
import { Message } from "../../../../../components/message/message";
import * as Typography from "../../../../../components/typography";
import { SignUpFormInput } from "../sign-up";
import * as StepStyle from "../steps.style";

export const Step2 = () => {
  const { register, formState, trigger, watch } =
    useFormContext<SignUpFormInput>();

  useEffect(() => {
    trigger("password");
    trigger("confirmPassword");
  }, [trigger, watch("password"), watch("confirmPassword")]);

  return (
    <StepStyle.Root>
      <StepStyle.LinkWrapper>
        <Typography.LinkText>Senha</Typography.LinkText>
      </StepStyle.LinkWrapper>
      <StepStyle.TitleWrapper>
        <Typography.H1>Agora, crie uma senha</Typography.H1>
      </StepStyle.TitleWrapper>
      <StepStyle.DescriptionWrapper>
        <Typography.BodySecondary>
          Crie uma senha forte e garanta segurança para sua conta.
        </Typography.BodySecondary>
      </StepStyle.DescriptionWrapper>

      <StepStyle.InputWrapper>
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
      </StepStyle.InputWrapper>

      {(formState.errors.confirmPassword || formState.errors.password) && (
        <Message
          icon={<Warning />}
          message="A senha escolhida não preenche os requisitos mínimos."
        />
      )}

      <StepStyle.DescriptionPasswordWrapper>
        <StepStyle.DescriptionPasswordText>
          <StepStyle.DescriptionPasswordTextSpan>
            Dica para a sua senha:
          </StepStyle.DescriptionPasswordTextSpan>{" "}
          ela deve contar no mínimo 8 caracteres sendo ao menos 1 letra
          maiúscula. 1 número e 1 caractere especial.
        </StepStyle.DescriptionPasswordText>
      </StepStyle.DescriptionPasswordWrapper>
    </StepStyle.Root>
  );
};
