import React from 'react'
import { CardStyle, Container } from '../Style'
import data from './data'

export default function Card() {
  return (
    <>
    <Container>
    {data.map((item) =>(
      <>
      <CardStyle key={item.id}>

      <img src={item.img} alt={item.img_alt} />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      </CardStyle>
      </>
))}
</Container>

    </>
  )
}
