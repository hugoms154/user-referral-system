import { toast } from "react-toastify";
import { Bell } from "../../assets/bell";
import { Copy } from "../../assets/copy";
import { Help } from "../../assets/help";
import { OrgLogo } from "../../assets/org-logo";
import { useAuth } from "../../context/auth";
import { AvatarMenu } from "../avatar-menu/avatar-menu";
import * as S from "./header.style";

export const Header = () => {
  const { signOut } = useAuth();

  function onAvatarClick() {
    signOut();
  }

  async function onCopyClick() {
    console.log("COPIANDO LINK", "createdLink");
    toast.dismiss("successful-copied");
    await navigator.clipboard.writeText("createdLink!");
    toast.success("Link copiado com sucesso", {
      toastId: "successful-copied",
    });
  }

  return (
    <S.Container>
      <S.ContainerLogo>
        <OrgLogo />
      </S.ContainerLogo>

      <S.ContainerOptions>
        <S.CopyButtonContainer>
          <S.CopyButton
            onClick={onCopyClick}
            label="Copiar meu código"
            leftIcon={<Copy />}
            type="button"
          />
        </S.CopyButtonContainer>

        <S.IconsWrapper>
          <Help />
        </S.IconsWrapper>

        <S.IconsWrapper>
          <Bell />
        </S.IconsWrapper>

        <AvatarMenu onClick={onAvatarClick} />
      </S.ContainerOptions>
    </S.Container>
  );
};
