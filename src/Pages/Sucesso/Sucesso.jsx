import React from 'react'

import { Bakcgroud, CustomStyles } from './Style';


export default function Sucesso() {
  
  return (
    <>
      <Bakcgroud>
        <CustomStyles>
          <h1>Sucesso!</h1>
          <h4>Recebemos o seu cadastro, <strong>responderemos</strong> o mais breve possível <strong>com</strong> as instruções de ativação da <strong>sua chave gratuíta temporária</strong>.</h4>
          <a className='Ok' href="/home">Ok</a>
        </CustomStyles>
      </Bakcgroud>
    </>
  )

}
