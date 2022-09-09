import React from 'react'

export default function email() {
  const nodemailer = require ('nodemailer');

let transporter = nodemailer.createTransport({
  host: "mail.jcambiental.com.br",
  port:587,
  secure: false,
  auth: {
    user: "suporte@jcambiental.com.br",
    pass: "19763Master"
  }

});


  return (
    transporter.sendMail({
      from:"Cadastro Grátis <jcambiental.com.br>",
      to: "olamundoestudio@gmail.com",
      subject: "Teste de envio de e-mail usando o NodeMailer",
      html:"Teste de envio de e-mail usando o NodeMailer"
    }).then(message => {
      console.log(message);
    
    }).catch(err => {
      console.log(err);
    })
  
  )
}




