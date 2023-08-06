import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();  
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  
  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({user:  userUpdated, avatarFile})  
  }

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
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" name="avatar" id="avatar" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>

        <Input 
          icon={FiUser} 
          value={name} 
          type="text" 
          placeholder='Nome'
          onChange={e => setName(e.target.value)}
        />

        <Input 
          icon={FiMail} 
          value={email} 
          type="text" 
          placeholder='E-mail'
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock} 
          type="password" 
          placeholder='Senha atual'
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          icon={FiLock} 
          type="password" 
          placeholder='Nova senha'
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title='Salvar' onClick={handleUpdate}/>
      </Form>

    </Container>
  )
}