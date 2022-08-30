import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import './Style'
import { Background, Container, FildForm, Grid01, TextField } from './Style';
import { Button } from '../../../../components/Button/Button';
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
import './Style.css'
export default function Contato() {

  return (
    <>
      <Container>
        <Background>
          <Grid01>
            <h3 id="contato">
              | Fale com um especialista
            </h3>
            <p>
              Tire suas dúvidas com um de nossos especialistas em um atenbimento rápido e fácil.
            </p>
           
            <Button > 
               <a  href="https://wa.me/5598984298854?text=Ol%C3%A1+estou+entrando+em+contato+via+Site%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+as+vantagens+do+sistema+OrganizeFy." target="_blank"> <p>Falar por WhatsApp</p></a>
            </Button>
          </Grid01>

          <Formik
            initialValues={{
              name: '',
              email: '',
              whats: '',
              cidade: '',
            }}

            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >

            {props => (

              <FildForm className='Box'>
                <form action="https://formsubmit.co/testegratisorganizefy@gmail.com" method="POST">
                <input
                type="hidden"
                name="_next"
                value="https://testegratis-organizefy.com/sucesso"
              ></input>
                  <label className='Box1 paragraf'><p>Nome:</p></label>
                  <Field className='Field' name='name' type='text' onBlur={props.handleBlur} />
                  <label className='Box1 paragraf'><p>E-mail:</p></label>
                  <Field className='Field' name='email' type='email' onBlur={props.handleBlur} />
                  <div className='ContainerField'>
                  <div className='GridField'>
                    <TextField>

                  <label className='Box1 paragraf' ><p>WhatsApp:</p></label>
                  </TextField>
                  <Field className='FieldWhats' name='whats' type='number' onBlur={props.handleBlur} />
                  </div>
                  <div className='GridField'>
                  <TextField>
                  <label className='Box1 paragraf'><p>Cidade:</p></label>
                  </TextField>
                  <Field className='FieldCidade' name='cidade' type='text' onBlur={props.handleBlur} />
                  </div>
                  </div>
                  <br />
                  <div className='RadioField'>
                  <Field name='termo' type='radio' onBlur={props.handleBlur} />    
                  <label className='Box1'>
                    <a className='linkDecoration' href='https://www.organizefy.com/privacy-policy/pt' target="_blank">

                    Eu aceito os termos de <strong>política de privacidade:</strong>
                    </a>
                    </label>
                  </div>
                  <br/>                
                  <div className='BoxButton'>
                  <button className='Button' type="submit">Enviar</button>
                  </div>
                 
                </form>
              </FildForm>
            )}

          </Formik>
        </Background>
      </Container>
    </>
  )
}
