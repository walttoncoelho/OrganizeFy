import React from 'react'

import logoImg from "../../assets/logoFooter.svg"
import { Container } from './Style'


export default function Footer() {
  return (
    <>  
    <Container>
    <img src={logoImg} alt="OrganizeFY" />
    <a href='https://www.organizefy.com/privacy-policy/pt' target="_blank"><p>Política de privacidade</p></a>     
    </Container>
    </>
  )
}
