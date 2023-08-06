import { ReactNode } from "react";
import * as Typography from "../../components/typography";
import * as S from "./message.style";

type MessageProps = { icon: ReactNode; message: string };

export const Message = ({ icon, message }: MessageProps) => {
  return (
    <S.Message>
      {icon}
      <Typography.Body>{message}</Typography.Body>
    </S.Message>
  );
};
