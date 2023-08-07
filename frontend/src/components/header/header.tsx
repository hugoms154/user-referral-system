import { Bell } from "../../assets/bell";
import { Copy } from "../../assets/copy";
import { Help } from "../../assets/help";
import { OrgLogo } from "../../assets/org-logo";
import { AvatarMenu } from "../avatar-menu/avatar-menu";
import * as S from "./header.style";

type HeaderProps = {
  onCopyClick?: () => void;
  onAvatarClick?: () => void;
};

export const Header = ({ onCopyClick, onAvatarClick }: HeaderProps) => {
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
