import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'


import { Container, Form, Avatar } from "./styles";

export function Profile(){
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={20}/>
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/webberchagas.png" alt="Foto do usuário" />
          <label htmlFor="picture">
            <FiCamera/>
            <input type="file" name="picture" id="picture" />
          </label>
        </Avatar>
        <Input icon={FiUser} type="text" placeholder='Nome'/>
        <Input icon={FiMail} type="text" placeholder='E-mail'/>
        <Input icon={FiLock} type="password" placeholder='Senha atual'/>
        <Input icon={FiLock} type="password" placeholder='Nova senha'/>

        <Button title='Salvar'/>
      </Form>

    </Container>
  )
}