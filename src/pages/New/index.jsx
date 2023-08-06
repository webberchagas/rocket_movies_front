import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { api } from '../../services/api'

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { Container, Form, Markers } from "./styles"

export function New(){
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag ]);
    setNewTag('');
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));  
  }

  async function handleAddNote(){
    if(!title){
      return alert('Por favor informe um titulo!');
    }

    if(!rating){
      return alert('Por favor nota de 0 a 5!');
    }

    if(!description){
      return alert('Por favor insira uma descrição do filme!');
    }

    if(tags.length === 0){
      return alert('Por favor adicione uma tag!');
    }

    await api.post('/movies', {
      title,
      rating,
      description,
      tags  
    })

    alert('Anotação criada com sucesso!');
    navigate(-1)
  }

  return (
    <Container>
      <Header/>

      <Form>
        <header>
          <Link to="/">
            <FiArrowLeft size={20}/>
            Voltar
          </Link>  
          <h2>Novo Filme</h2>
        </header>

        <div className='col-2'>
          <Input 
            type='text' 
            placeholder='Título'
            onChange={e => setTitle(e.target.value)}
          />
          <Input 
            type='number' 
            placeholder='Sua nota (de 0 a 5)' step='1' min="0" max="5"
            onChange={e => setRating(e.target.value)}  
          />
        </div>

        <Textarea 
          placeholder='Observações'
          onChange={e => setDescription(e.target.value)}
        />

        <Markers>
          <span>Marcadores</span>
          <div>
            {
              tags && tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {handleRemoveTag(tag)}}  
                />
              ))
            }  
            <NoteItem 
              isNew 
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag} 
            />
          

          </div>
        </Markers>

        <div className='col-2'>
          <Button title="Excluir"/>
          <Button title="Salvar" onClick={handleAddNote}/>
        </div>
       
      </Form>

    </Container>
  )
}