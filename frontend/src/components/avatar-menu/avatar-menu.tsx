import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import avatar from "../../assets/none.svg";
import "./avatar-menu.style.css";

type AvatarMenuProps = {
  onClick?: () => void;
};

export const AvatarMenu = ({ onClick }: AvatarMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <img content="fitContent" src={avatar} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
          <DropdownMenu.Item className="DropdownMenuItem" onClick={onClick}>
            Sair
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
