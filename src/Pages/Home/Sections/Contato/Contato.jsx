import React, { useEffect, useState } from 'react'
import './Style'
import { Background, Container, FildForm, Grid01, TextField } from './Style';
import { Button } from '../../../../components/Button/Button';
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
import './Style.css'
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyCDjhqQWSLkjc4PI0lmL7H_au94Fb541VM",
  authDomain: "organizefy-a375d.firebaseapp.com",
  projectId: "organizefy-a375d",
  //----->
  storageBucket: "organizefy-a375d.appspot.com",
  messagingSenderId: "684811116111",
  appId: "1:684811116111:web:cd8568086626dd5afad43a",
  measurementId: "G-2XLC8GKM3Z"
});


export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhats] = useState("");


  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "contact")

  async function criateContact() {
    console.log({name, email, whatsapp} )
    const user = await addDoc(userCollectionRef, {
      name, email, whatsapp,
    });
    console.log(user);
  }

  useEffect(() =>{
    const getContact = async () => {
      const data = await getDocs(userCollectionRef)
    /*   console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); */
      setContact(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    };
    getContact();
  },[]);

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

          <FildForm>

          <div className='Box'>
      <input 
      className='Box1 paragraf'
      type="text" 
      placeholder='Nome' 
      value={name}
      onChange={(e) => setName(e.target.value)}
      /> <br/>
      <input
      className='Box1 paragraf'
      type="text"
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
      className='Box1 paragraf'
      type="number"
      placeholder='WhatsApp'
      value={whatsapp}
      onChange={(e) => setWhats(e.target.value)}
      /><br/>


      <button className='Button' onClick={criateContact}> Enviar</button>


   

    </div>
      </FildForm>


        </Background>
      </Container>
    </>
  )
}
