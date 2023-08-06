import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowRight } from "../../../../assets/arrow-right";
import { Logo } from "../../../../assets/logo";
import { Warning } from "../../../../assets/warning";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/form";
import { Message } from "../../../../components/message/message";
import * as Typography from "../../../../components/typography";
import * as S from "./login.style";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type LoginFormInput = z.infer<typeof loginFormSchema>;

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isValid },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  });

  // async function handleLogin(data: LoginFormInput) {
  async function handleLogin() {
    // const { email, password } = data;

    // TODO: async request

    reset();
  }

  return (
    <S.Root>
      <S.Container>
        <Logo />

        <Typography.H1>Entre na sua conta</Typography.H1>

        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            label="E-mail"
            type="email"
            placeholder="digite seu e-mail"
            required
            error={!!errors.email}
            {...register("email")}
          />

          <Input
            label="Senha"
            type="password"
            required
            error={!!errors.password}
            {...register("password")}
          />
          {(errors.email || errors.password) && (
            <Message icon={<Warning />} message="Usuário ou senha incorretos" />
          )}

          <Button
            label="Entrar"
            icon={<ArrowRight />}
            type="submit"
            disabled={isSubmitting || !isValid}
          />
        </form>
      </S.Container>
    </S.Root>
  );
};
