import { ReactNode } from "react";
import * as S from "./message.style";

type MessageProps = { icon: ReactNode; message: string };

export const Message = ({ icon, message }: MessageProps) => {
  return (
    <S.Message>
      {icon}
      {message}
    </S.Message>
  );
};
