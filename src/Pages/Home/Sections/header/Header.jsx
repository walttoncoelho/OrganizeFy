import React from 'react'
import { Button } from '../../../../components/Button/Button'
import { Container, Grid1 } from './Style'
export default function Header() {
  return (
    <>
      <Container>
        <Grid1>
          <h1>
            A solução ideal para acelerar a Transformação digital do seu negócio
          </h1>
          <p>
            Otimize o tempo da sua equipe, capture e gerencie documentos com eficiência com a plataforma OrganizeFy.
          </p>
          {/* <button type="submit">Falar por WhatsApp</button> */}
          <Button type="submit"> <p>Falar por WhatsApp</p></Button>
        </Grid1>
      </Container>
    </>
  )
}
