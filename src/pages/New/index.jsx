import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { Container, Form, Markers } from "./styles"

export function New(){
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
          <Input type='text' placeholder='Título'/>
          <Input type='number' placeholder='Sua nota (de 0 a 5)' step='1' min="0" max="5"/>
        </div>

        <Textarea placeholder='Observações'/>

        <Markers>
          <span>Marcadores</span>
          <div>
            <NoteItem value="Drama" />
            <NoteItem value="Ficção Científica" />
            <NoteItem placeholder="Novo marcador" isNew />
          

          </div>
        </Markers>

        <div className='col-2'>
          <Button title="Excluir"/>
          <Button title="Salvar"/>
        </div>
       
      </Form>

    </Container>
  )
}