import { useFormContext } from "react-hook-form";
import { Input } from "../../../../../components/form";
import * as Typography from "../../../../../components/typography";
import { SignUpFormInput } from "../sign-up";
import * as StepStyle from "../steps.style";

export const Step3 = () => {
  const { register } = useFormContext<SignUpFormInput>();

  return (
    <StepStyle.Root>
      <StepStyle.LinkWrapper>
        <Typography.LinkText>Código de indicação</Typography.LinkText>
      </StepStyle.LinkWrapper>
      <StepStyle.TitleWrapper>
        <Typography.H1>Chegou aqui por indicação?</Typography.H1>
      </StepStyle.TitleWrapper>
      <StepStyle.DescriptionWrapper>
        <Typography.BodySecondary>
          Insira o código de indicação no campo abaixo.
        </Typography.BodySecondary>
      </StepStyle.DescriptionWrapper>
      <StepStyle.InputWrapper>
        <Input
          label="Código de indicação"
          type="text"
          placeholder="0000-0000-0000-0000"
          {...register("referralCode")}
        />
        <StepStyle.ObservationText>
          Esta etapa não é obrigatória
        </StepStyle.ObservationText>
      </StepStyle.InputWrapper>
    </StepStyle.Root>
  );
};
