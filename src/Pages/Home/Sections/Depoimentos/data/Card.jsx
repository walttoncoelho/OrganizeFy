import React from 'react'
import { CardStyle, Container } from '../Style'
import data from './data'

export default function Card() {
  return (
    <>
    <Container>

      {data.map((item) =>(
      <>
    <CardStyle key={item.id} >
      <img src={item.img} alt={item.img_alt} />
      <h4>{item.nome}</h4>
      <p>{item.empresa}</p>
      <p>{item.description}</p>
      <p>{item.solução}</p>

      </CardStyle>
      </>

))}
</Container>
    </>
  )
}
