import React, { useEffect, useState } from 'react'

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

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhats] = useState("");
  const [contact, setContact ]  = useState([]);

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
    <div>
      <input 
      type="text" 
      placeholder='Nome' 
      value={name}
      onChange={(e) => setName(e.target.value)}
      /> <br/>
      <input
      type="text"
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
      type="number"
      placeholder='WhatsApp'
      value={whatsapp}
      onChange={(e) => setWhats(e.target.value)}
      /><br/>

      <button onClick={criateContact}> Enviar</button>
      <hr/>
      <ul>
        {contact.map((user) => {
          return(
            <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.whatsapp}</li>
            <hr/>
          </div>
            )
        })}
      </ul>
    </div>
  );
};
