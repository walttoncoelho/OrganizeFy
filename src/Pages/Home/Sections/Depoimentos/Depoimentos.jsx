import React from 'react'
import Card from './data/Card'

import './Style'
import { BoxTitle, Section } from './Style'

export default function Depoimentos() {
  return (
    <>
      <Section>
       <br/>
       <BoxTitle>
        <h3>
          | Nossos clientes podem falar melhor da Organizefy!
        </h3>
       </BoxTitle>
        <Card />
      </Section>
    </>
  )
}
