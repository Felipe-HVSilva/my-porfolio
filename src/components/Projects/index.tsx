import { Container } from "./styles";

import teslaBank from '../../assets/tesla.png'
import coffeeDelivery from '../../assets/coffee-delivery.png'

export function Projects() {
  return (
    <Container>
      <h2>Projetos</h2>
      <div className="content">
        <a href="https://tesla-bank.netlify.app/" target="_blank">
          <img src={teslaBank} alt="" />
        </a>  
        <a href="https://coffee-delivery-573h.vercel.app/" target="_blank">
          <img src={coffeeDelivery} alt="" />
        </a>  
      </div>
    </Container>
  )
}