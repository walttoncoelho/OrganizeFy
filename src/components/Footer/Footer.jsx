import React from 'react'

import logoImg from "../../assets/logoFooter.svg"
import { Container } from './Style'


export default function Footer() {
  return (
    <>  
    <Container>
    <img src={logoImg} alt="OrganizeFY" />
    <a href='#'><p>Política de privacidade</p></a>     
    </Container>
    </>
  )
}
