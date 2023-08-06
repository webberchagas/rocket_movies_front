import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { api }  from '../../services/api';

import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Section, Form, Background} from "./styles";

export function SignUp(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(0);

  const navigate = useNavigate();

  function handleSingUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos!');
    }

    api.post('/users', {name, email, password})
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate(-1);
      })
      .catch( error => {
        if(error.response){
          alert(error.response.data.message);
        } else {
          alert('Não foi possível cadastrar.');
        }
      })
  }

  return (
    <Container>
      <Section>
        <h1>RocketMovies</h1>

        <span>Aplicação para acompanhar tudo que assistir.</span>

        <Form>
          <h2>Crie sua conta</h2>

          <Input 
            icon={FiUser} 
            type="text" 
            placeholder='Nome'
            onChange={e => setName(e.target.value)}
          />

          <Input 
            icon={FiMail} 
            type="text" 
            placeholder='E-mail'
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            icon={FiLock} 
            type="password"
            placeholder='Senha'
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Cadastrar" onClick={handleSingUp}/>          
        </Form>

        <Link to="/">
          <FiArrowLeft  size={20}/>
          Voltar para o login
        </Link>
      </Section>

      <Background />
    </Container>
  )
}