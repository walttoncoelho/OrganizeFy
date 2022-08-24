import React from 'react'
import { CardStyle, Container, Description } from '../Style'
import data from './data'

export default function Card() {
  return (
    <>
    <Container>

      {data.map((item) =>(
      <>
    <CardStyle key={item.id} >
      <img src={item.img} alt={item.img_alt} />
      <h4> {item.nome}</h4>
      <p>{item.empresa}</p>
      <Description>
      <p>{item.description}</p>
      </Description>
      <p>{item.solução}</p>

      </CardStyle>
      </>

))}
</Container>
    </>
  )
}
