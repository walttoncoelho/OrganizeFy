import React from 'react'
import { Button } from '../../../../components/Button/Button'
import { Container, Grid1 } from './Style'
export default function Header() {
  return (
    <>
      <Container>
        <Grid1>
          <h1>
            A solução ideal para acelerar a <strong>Transformação digital do seu negócio</strong>
          </h1>
          <p>
            Otimize o tempo da sua equipe, capture e gerencie documentos com eficiência com a plataforma OrganizeFy.
          </p>
       
          <Button>
          <a  href="https://wa.me/5598984298854?text=Ol%C3%A1+estou+entrando+em+contato+via+Site%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+as+vantagens+do+sistema+OrganizeFy." target="_blank"> <p>Falar por WhatsApp</p></a> 
          </Button>
        </Grid1>
      </Container>
    </>
  )
}
