import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'

import { Container, Section } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      
      <div>
        <h2>Meus filmes</h2>
        <Button to='/new' title="Adicionar filme">
          <FiPlus/>
        </Button>
      </div>

      <Section>
        <Note data={{
          title: "Interestellar",
          description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
          rating: 4, 
          tags: [
            {id: 1, name: "Drama"},
            {id: 2, name: "Família"},
            {id: 3, name: "Ficção Científica"},
          ]
        }}/>
        

      </Section>
      
    </Container>
  )
}
