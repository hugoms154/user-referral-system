import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import * as z from "zod";
import { Check } from "../../../assets/check";
import { Copy } from "../../../assets/copy";
import { LinkIcon } from "../../../assets/link-icon";
import { Person } from "../../../assets/person";
import { ToastIcon } from "../../../assets/toast-icon";
import { Button } from "../../../components/button";
import { Input } from "../../../components/form";
import { Header } from "../../../components/header/header";
import * as Typography from "../../../components/typography";
import { useAuth } from "../../../context/auth";
import * as S from "./home.style";

const inputSchema = z.object({
  url: z.string().min(1),
});

type CopyInput = z.infer<typeof inputSchema>;

const mockData = {
  createdLink: "https://linkpersonalizado.com.br",
};

export const HomePage = () => {
  const [createdLink, setCreatedLink] = useState<null | string>(null);

  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    register,
  } = useForm<CopyInput>({
    resolver: zodResolver(inputSchema),
    mode: "onBlur",
  });

  async function handleGenerator() {
    // receber da api o link gerado
    setCreatedLink(mockData.createdLink);
  }

  function handleCreateNewLink() {
    setCreatedLink(null);
  }

  async function handleCopyLink() {
    toast.dismiss("successfull-copied");
    await navigator.clipboard.writeText(mockData.createdLink);
    toast.success("Link copiado com sucesso", {
      toastId: "successfull-copied",
    });
  }

  return (
    <>
      <ToastContainer
        className="toast-container"
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        limit={1}
        rtl={false}
        pauseOnFocusLoss
        icon={<ToastIcon />}
      />
      <S.Root>
        <Header onCopyClick={handleCopyLink} onAvatarClick={handleLogout} />
        <S.ContainerBoxes>
          <S.LeftContainerBoxes>
            <S.LeftTopBox>
              <S.LeftBoxContent>
                <S.LinkIconWrap>
                  <LinkIcon />
                </S.LinkIconWrap>

                <S.LeftTopBoxTitleWrapper>
                  <Typography.H1>Gerador de Link</Typography.H1>
                </S.LeftTopBoxTitleWrapper>

                <Typography.BodySecondary $disable>
                  Crie links personalizados que convertem e geram comissões para
                  você.
                </Typography.BodySecondary>
              </S.LeftBoxContent>
            </S.LeftTopBox>

            <S.LeftBottomBox>
              {createdLink === null ? (
                <S.LeftBoxContent>
                  <S.LeftBottomBoxTitleWrapper>
                    <Typography.BodySecondary>
                      Vá até a página que deseja compartilhar, copie a URL e
                      cole no campo abaixo para criar seu link personalizado:
                    </Typography.BodySecondary>
                  </S.LeftBottomBoxTitleWrapper>

                  <form onSubmit={handleSubmit(handleGenerator)}>
                    <Input
                      type="text"
                      placeholder="Cole a URL aqui..."
                      required
                      error={""}
                      {...register("url")}
                    />

                    <Button
                      label="Criar link personalizado"
                      type="submit"
                      $disabled={isSubmitting || !isValid}
                    />
                  </form>
                </S.LeftBoxContent>
              ) : (
                <S.LeftBoxContent>
                  <S.LeftBottomBoxTitleWrapper>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <Check />
                      <Typography.BodySecondary $regular>
                        Link criado com sucesso!
                      </Typography.BodySecondary>
                    </div>
                    <br />
                    <Typography.BodySecondary $disable>
                      Muito bem. Agora você já pode compartilhar seu link
                      personalizado onde quiser.
                    </Typography.BodySecondary>
                  </S.LeftBottomBoxTitleWrapper>

                  <S.ButtonsWrapper>
                    <Button
                      label="Copiar link personalizado"
                      type="button"
                      rightIcon={<Copy color="#FFFFFF" />}
                      $disabled={isSubmitting || !isValid}
                      onClick={handleCopyLink}
                    />

                    <Button
                      label="Criar novo link"
                      type="button"
                      $variant="link"
                      $textCenter
                      onClick={handleCreateNewLink}
                    />
                  </S.ButtonsWrapper>
                </S.LeftBoxContent>
              )}
            </S.LeftBottomBox>
          </S.LeftContainerBoxes>

          <S.RightBox>
            <S.PersonWrapper>
              <Person />
            </S.PersonWrapper>
            <S.RightBoxTextContainer>
              <Typography.BodySecondary>
                Links personalizados
                <Typography.StrongBodySecondary>
                  {" "}
                  aumentam as suas chances e conversão em até 50%
                </Typography.StrongBodySecondary>
                , criando mais comissões para você.
              </Typography.BodySecondary>
              <br />
              <Typography.StrongBodySecondary>
                Comece agora a criar e compartilhar seus links.
              </Typography.StrongBodySecondary>
            </S.RightBoxTextContainer>
          </S.RightBox>
        </S.ContainerBoxes>
      </S.Root>
    </>
  );
};
