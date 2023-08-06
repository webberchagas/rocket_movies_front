import { Container, Profile } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({onChange}) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut(){
    signOut();
    navigate('/');
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <input 
        type="text"
        placeholder="Pesquisar pelo título" 
        onChange={onChange}
      />
      <Profile>
        <div>
          <strong>{user.name}</strong>  
          <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do  usuário" />
        </Link>

      </Profile>

    </Container>
  )
}