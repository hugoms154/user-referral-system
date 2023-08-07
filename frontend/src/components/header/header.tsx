import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bell } from "../../assets/bell";
import { Copy } from "../../assets/copy";
import { Help } from "../../assets/help";
import { OrgLogo } from "../../assets/org-logo";
import { useAuth } from "../../context/auth";
import { AvatarMenu } from "../avatar-menu/avatar-menu";
import * as S from "./header.style";

type HeaderProps = {
  $hideButtons?: boolean;
};

export const Header = ({ $hideButtons = false }: HeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function onAvatarClick() {
    signOut();
  }

  async function onCopyClick() {
    if (user?.referralCode) {
      console.log("COPIANDO LINK", "createdLink");
      toast.dismiss("successful-copied");
      await navigator.clipboard.writeText(user.referralCode);
      toast.success("Link copiado com sucesso", {
        toastId: "successful-copied",
      });
    }
  }

  function onLogoClick() {

    console.log(user)
    if (user === null) {
      navigate("/");
    }
  }

  return (
    <S.Container>
      <S.ContainerLogo onClick={onLogoClick}>
        <OrgLogo />
      </S.ContainerLogo>

      {!$hideButtons && (
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
      )}
    </S.Container>
  );
};
