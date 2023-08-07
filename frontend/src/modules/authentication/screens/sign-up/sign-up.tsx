import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as z from "zod";
import { ArrowLeft } from "../../../../assets/arrow-left";
import { ArrowRight } from "../../../../assets/arrow-right";
import { Button } from "../../../../components/button";
import { Header } from "../../../../components/header/header";
import * as Typography from "../../../../components/typography";
import { useAuth } from "../../../../context/auth";
import * as S from "./sign-up.style";
import { Step1 } from "./step-1/step-1";
import { Step2 } from "./step-2/step-2";
import { Step3 } from "./step-3/step-3";

const possibleSteps = ["1", "2", "3"];

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/),
    confirmPassword: z
      .string()
      .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/),
    referralCode: z.string().optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "As senhas estão diferentes",
    path: ["confirmPassword"],
  });

export type SignUpFormInput = z.infer<typeof signUpSchema>;

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const methods = useForm<SignUpFormInput>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });
  const [searchParams] = useSearchParams();
  const step = Object.fromEntries([...searchParams]).step || "1";
  const progress = (Number(step) / possibleSteps.length) * 100;

  useEffect(() => {
    if (!possibleSteps.includes(step)) {
      navigate("/sign-up");
    }
  }, [navigate, step]);

  function handleSubmit(data: SignUpFormInput) {
    localStorage.setItem(`${import.meta.env.VITE_KEY_STORAGE}:login`, "true");
    signUp(data);
  }

  async function handleNextButton() {
    if (step !== possibleSteps[possibleSteps.length - 1]) {
      navigate(`/sign-up?step=${Number(step) + 1}`);
      return;
    }
    methods.handleSubmit(handleSubmit)();
  }

  function handleBackButton() {
    navigate(`/sign-up?step=${Number(step) - 1}`);
  }

  function disabledButton() {
    if (step === "1") {
      return (
        !methods.getFieldState("email").isDirty ||
        !!methods.getFieldState("email").error?.message
      );
    }
    if (step === "2") {
      return methods.getFieldState("confirmPassword").invalid;
    }
    return false;
  }

  return (
    <FormProvider {...methods}>
      <S.Root>
        <Header $hideButtons />
        <S.Container>
          <S.FormContainer>
            {step === "1" && <Step1 />}
            {step === "2" && <Step2 />}
            {step === "3" && <Step3 />}
          </S.FormContainer>
          <S.ProgressBar $progress={progress} />
          <S.FooterWrapper>
            {step !== "1" && (
              <Button
                $variant="ghost"
                label="Voltar"
                onClick={handleBackButton}
                leftIcon={<ArrowLeft color="#1E1A34" />}
              />
            )}
            <S.FooterNextStepWrapper>
              <Typography.BodySecondary $regular>
                Etapa {step} de {possibleSteps.length}
              </Typography.BodySecondary>
              <Button
                label={
                  Number(step) === possibleSteps.length
                    ? "Finalizar"
                    : "Avançar"
                }
                onClick={handleNextButton}
                rightIcon={<ArrowRight />}
                disabled={disabledButton()}
              />
            </S.FooterNextStepWrapper>
          </S.FooterWrapper>
        </S.Container>
      </S.Root>
    </FormProvider>
  );
};
