import { Container } from './styles'
import myCV from '../../MyCV.pdf'

export function Hero() {
  return (
    <Container>
      <div>
        <h1>React</h1>
        <h1>Developer</h1>

        <p>Tenho 23 anos, sou Desenvolvedor <strong> FRONTEND</strong> com 2 anos de experiência</p>
        <a href={myCV}  download>Download CV</a>
      </div>
  </Container>
  )
}