import styled from "styled-components";

export const Bakcgroud= styled.div `
background-color: #078f19;
max-width: 1920px;
height: 1080px;

`;
export const CustomStyles = styled.div `

    margin: auto;  
    transform: 'translate(-50%, -50%)';
    width: 350px;
    height: 500px;
    

    h1{
      display: flex;
      margin: auto;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 700;
      
    }
    h4{
      color: #ffffff;
      font-weight: 300;

    }
    
   .Ok {
    display: flex;
    margin: auto;
    background-color: #e9490a;
    width: 160px;
    height: 40px;
    border-radius: 50px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    
    border-style: none;

    :hover{
      background-color: #2ca149;

    }
   }

`;


export const Modal = styled.div`

  width: 350px;
  height: 200px;
  border-radius: 9px;
  background-color: #66e07a;
  flex-direction: column;




 

  h3{
    margin: auto;
   
  }

  h5{
    margin: auto;
  }

  strong{
    background-color: #3ea80c;
  }


  @media screen and (max-width: 770px) {
    
   }
`;


/* export const OpenModal = styled.div`

`;

export const ClosedModal = styled.div`

`; */


