import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowRight } from "../../../../assets/arrow-right";
import { Check } from "../../../../assets/check";
import { Logo } from "../../../../assets/logo";
import { MessageChat } from "../../../../assets/message-chat";
import { Warning } from "../../../../assets/warning";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/form";
import { Message } from "../../../../components/message/message";
import * as Typography from "../../../../components/typography";
import { useAuth } from "../../../../context/auth";
import * as S from "./login.style";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type LoginFormInput = z.infer<typeof loginFormSchema>;

export const LoginPage = () => {
  const { signIn } = useAuth();
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginFormSchema),
    mode: "onBlur",
  });

  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  async function handleLogin({ email, password }: LoginFormInput) {
    const { data, error, loading } = await signIn({ email, password });
    console.log("LOGIN RESPONSE", { data, error, loading });

    if (error) {
      setApiError(error?.message ?? "error");
      return;
    }

    localStorage.setItem(`${import.meta.env.VITE_KEY_STORAGE}:login`, "true");
  }

  return (
    <S.Root>
      <S.Container>
        <Logo />

        <Typography.H1>Entre na sua conta</Typography.H1>

        <S.FormContainer>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Input
              label="E-mail"
              type="email"
              placeholder="digite seu e-mail"
              required
              error={errors.email?.message || apiError}
              {...register("email")}
            />

            <Input
              label="Senha"
              type="password"
              link="Esqueci minha senha"
              required
              error={errors.password?.message || apiError}
              {...register("password")}
            />

            {(errors.email || errors.password || apiError) && (
              <Message
                icon={<Warning />}
                message="Usuário ou senha incorretos"
              />
            )}

            <S.CheckboxContainer
              checked={checked}
              onClick={handleCheckboxChange}
            >
              <S.HiddenCheckbox
                onChange={handleCheckboxChange}
                checked={checked}
              />
              <S.Checkbox checked={checked}>{checked && <Check />}</S.Checkbox>
              <S.CheckBoxText checked={checked}>
                Me mantenha conectado
              </S.CheckBoxText>
            </S.CheckboxContainer>

            <Button
              label="Entrar"
              rightIcon={<ArrowRight />}
              type="submit"
              disabled={isSubmitting || !isValid}
            />
          </form>
        </S.FormContainer>
      </S.Container>

      <S.MessageIconWrapper>
        <MessageChat />
      </S.MessageIconWrapper>
    </S.Root>
  );
};
