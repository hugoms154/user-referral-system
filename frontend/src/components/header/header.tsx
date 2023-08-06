import avatar from "../../assets/40px/image/none.svg";
import { Bell } from "../../assets/bell";
import { Copy } from "../../assets/copy";
import { Help } from "../../assets/help";
import { OrgLogo } from "../../assets/org-logo";
import * as S from "./header.style";

export const Header = () => {
  return (
    <S.Container>
      <S.ContainerLogo>
        <OrgLogo />
      </S.ContainerLogo>

      <S.ContainerOptions>
        <S.CopyButtonContainer>
          <S.CopyButton
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

        <img content="fitContent" src={avatar} />
      </S.ContainerOptions>
    </S.Container>
  );
};
