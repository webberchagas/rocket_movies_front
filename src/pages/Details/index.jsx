import { FiArrowLeft } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

import { Container } from "./styles";
import { Rating } from '../../components/Rating'
import { useEffect, useState } from 'react';
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth';

export function Details(){
  const [data, setData] = useState(null);

  const params = useParams();
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  useEffect(() => {
    async function fecthNote(){
      const response = await api.get(`/movies/${params.id}`)
      const datetime =  new Date(response.data.created_at).toLocaleString().split(',');
      
      response.data = {...response.data, datetime}
      setData(response.data)
    }

    fecthNote()

  }, [])
      
  return (
    <Container>
      <Header/>
  
      {
        data && <main>
          <header>
            <Link to="/">
              <FiArrowLeft/>
              Voltar
            </Link>
            <div>
              <h2>{data.title}</h2>
              <Rating rating={data.rating}/>
            </div>

            <div>
              <img src={avatarUrl} alt={`Foto do usuáro ${user.name}`} />
              <span>Por {user.name}</span>
              <BiTime />
              <span>{data.datetime}</span>
            </div>
          </header>

          <aside>
            {
              data.tags && data.tags.map(tag => (
                <Tag
                  key={tag.id} 
                  title={tag.name}
                />
              ))
            }
            
            
          </aside>

          <p>
            {data.description}
          </p>
        </main>
      }
    </Container>
  )
}