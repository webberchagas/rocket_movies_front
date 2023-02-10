import { Link } from 'react-router-dom'

import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Section, Form, Background} from "./styles";

export function SignUp(){

  return (
    <Container>
      <Section>
        <h1>RocketMovies</h1>

        <span>Aplicação para acompanhar tudo que assistir.</span>

        <Form>
          <h2>Crie sua conta</h2>

          <Input icon={FiUser} type="text" placeholder='Nome'/>
          <Input icon={FiMail} type="text" placeholder='E-mail'/>
          <Input icon={FiLock} type="password" placeholder='Senha'/>

          <Button title="Entrar"/>

          <Link to="/">
            <FiArrowLeft  size={20}/>
            Voltar para o login
          </Link>
        </Form>
      </Section>

      <Background />
    </Container>
  )
}