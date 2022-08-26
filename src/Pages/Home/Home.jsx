import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Navbar } from '../../components/navbar'
import Contato from './Sections/Contato/Contato'
import Depoimentos from './Sections/Depoimentos/Depoimentos'
import Header from "./Sections/header/Header"
import Vantagens from './Sections/Vantagens/Vantagens'

export default function Home() {
  return (
    <>
        <>
        <Navbar />
      <Header />    
      <Vantagens />     
      <Depoimentos />
      <Contato />
      <Footer />
      
    </>
    </>
  )
}
