import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiMail, FiLock} from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Section, Form, Background} from "./styles";
import { useAuth } from '../../hooks/auth';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth(); 
  
  function handleSignIn(){
    signIn({email, password})
  }

  return (
    <Container>
      <Section>
        <h1>RocketMovies</h1>
        
        <span>Aplicação para acompanhar tudo que assistir.</span>
        
        <Form>
          <h2>Faça seu login</h2>

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

          <Button title="Entrar" onClick={handleSignIn}/>
        </Form>

        <Link to="/register">   
          Criar conta
        </Link>
      </Section>

      <Background />
    </Container>
  )
}