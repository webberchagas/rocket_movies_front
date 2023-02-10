import { Container } from "./styles";

export function Input({ icon: Icon, type = "text", placeholder = "", ...rest}){
  return (
    <Container>
      {Icon && <Icon />}
      <input 
        type={type} 
        placeholder={placeholder} 
        {...rest} 
      />

    </Container>
  )
}