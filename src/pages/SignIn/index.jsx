import { Link } from 'react-router-dom'
import { FiMail, FiLock} from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Section, Form, Background} from "./styles";

export function SignIn(){

  return (
    <Container>
      <Section>
        <h1>RocketMovies</h1>
        
        <span>Aplicação para acompanhar tudo que assistir.</span>
        
        <Form>
          <h2>Faça seu login</h2>

          <Input icon={FiMail} type="text" placeholder='E-mail'/>
          <Input icon={FiLock} type="password" placeholder='Senha'/>

          <Button title="Entrar"/>
        </Form>

        <Link to="/register">
          Criar conta
        </Link>
      </Section>

      <Background />
    </Container>
  )
}