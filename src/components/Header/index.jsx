import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input 
        type="text"
        placeholder="Pesquisar pelo título" 
      />
      <Profile>
        <div>
          <strong>Webber Chagas</strong>
          <a href="#">sair</a>
        </div>
        <Link to="/profile">
          <img src="https://github.com/webberchagas.png" alt="Foto do  usuário" />
        </Link>

      </Profile>

    </Container>
  )
}