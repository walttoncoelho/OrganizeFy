import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import './Style'
import { Background, Container, FildForm, Grid01, GridForm, TextField } from './Style';
import { Button } from '../../../../components/Button/Button';
import './Style.css'
export default function Contato() {

  return (
    <>
      <Container>
        <Background>
          <Grid01>
            <h3>
              | Fale com um especialista
            </h3>
            <p>
              Tire suas dúvidas com um de nossos especialistas em um atenbimento rápido e fácil.
            </p>
            <Button type="submit"> <p>Falar por WhatsApp</p></Button>
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
                <form onSubmit={props.handleSubmit}>
                  <label className='Box1 paragraf'><p>Nome:</p></label>
                  <Field className='Field' name='name' type='text' onBlur={props.handleBlur} />
                  <label className='Box1 paragraf'><p>E-mail:</p></label>
                  <Field className='Field' name='email' type='email' onBlur={props.handleBlur} />
                  <div className='ContainerField'>
                  <div className='GridField'>
                    <TextField>

                  <label className='Box1 paragraf'><p>WhatsApp:</p></label>
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
                  <label className='Box1'>Eu aceito os termos de política de privacidade:</label>
                  </div>
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
