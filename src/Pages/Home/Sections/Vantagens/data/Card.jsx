import React from 'react'
import { CardStyle, CardText, Container } from '../Style'
import data from './data'

export default function Card() {
  return (
    <>
    <Container>
    {data.map((item) =>(
      <>
      <CardStyle key={item.id}>
      <img src={item.img} alt={item.img_alt} />
      <CardText>

      <h4>{item.title}</h4>
      <p>{item.description}</p>
      </CardText>
      </CardStyle>
      </>
))}
</Container>
    </>
  )
}
