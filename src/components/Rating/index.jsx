import { BsStarFill, BsStar} from 'react-icons/bs'
import { Container } from "./styles";

export function Rating({ rating }){
  const stars = []
  
  for(let i = 0; i < 5; i++){
    let star = i < rating ? BsStarFill : BsStar;
    stars.push(star)
  }
  
  return(
    <Container>
      { stars.map( (Star, index) => <Star key={index}/>)}
    </Container>
  )
}