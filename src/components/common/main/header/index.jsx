import { Wrapper, Title } from "./index.styles";
import useAuth from "@src/hooks/useAuth";

const Header = () => {
  const { user, token, isAuthenticated } = useAuth();
  return (
    <Wrapper>
      {
        isAuthenticated ? (
          <Title>{`Hello, ${user.username}!`}</Title>
        ) : (
          <Title>Hello, Guest</Title>
        )
      }
    </Wrapper>
  )
}

export default Header;