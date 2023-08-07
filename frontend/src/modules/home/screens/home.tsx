import { Header } from "../../../components/header/header";
import { useAuth } from "../../../context/auth";
import * as S from './home.style';

export const HomePage = () => {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }

  return (
    <S.Root>
      <Header />
      <h1>Home</h1>
      <button onClick={handleLogout}>
        <h2>SIGN OUT</h2>
      </button>
    </S.Root>
  )
}