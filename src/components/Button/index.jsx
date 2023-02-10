import { Container } from "./styles";

export function Button({title, children, ...rest}){

  return (
    <Container {...rest}>
      {children}
      {title}
    </Container>
  )
}