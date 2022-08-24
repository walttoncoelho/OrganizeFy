import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  margin: auto;
  background-color: #FF5921;
  height: 50px;
  width: 180px;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;


  p{

    color: #ffffff;
  }
  :hover{
    background-color: #12eb86;
    height: 50px;
  width: 180px;
  transition: 0.1s;
 border-color: #ff4800;
  border-style: solid;
  p{
    color: #111111;
  }

  }

  @media screen and (max-width: 770px) {    
    display: flex;
    margin: auto;   
       
    }
  
`;