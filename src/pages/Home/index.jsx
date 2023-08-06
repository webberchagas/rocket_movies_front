import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'

import { Container, Section } from './styles'
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleDatails(id){
    navigate(`/details/${id}`);
  }
  
  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/movies?title=${search}`)
      setNotes(response.data)
    } 

    fetchNotes()
  }, [search])
  
  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)}/>
      
      <div>
        <h2>Meus filmes</h2>
        <Button to='/new' title="Adicionar filme">
          <FiPlus/>
        </Button>
      </div>

      <Section>
        {
          notes.map(note => (
            <Note 
              key={String(note.id)}  
              data={note}
              onClick={() => {handleDatails(note.id)}}
            />
          ))

        }
        
      </Section>
      
    </Container>
  )
}
