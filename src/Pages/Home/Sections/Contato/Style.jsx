import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  background-image: url(./images/contato/BgContato.jpg); 
  max-width: 1920px;
  height: 650px;
  @media screen and (max-width: 770px) {
  display: flex;
  flex-direction: column;
   height: 1000px;

   
    
    }


`;

export const TextField = styled.div`

`;

export const Grid01 = styled.div`
width: 50%;
display: flex;
margin: auto;
flex-direction: column;
padding: 10px;
border-radius: 20px;
margin-left: 40px; 
text-align: start;

@media screen and (max-width: 770px) {
    width:350px;

    margin: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
   
    
    }


h3{
  text-align: left;
  justify-content: flex-start;
  color: aliceblue;
  padding: 10px;
  
}
p{
  color: aliceblue;
  width: 300px;
  padding: 10px;
  
}
 
  
`;
export const Background = styled.div`
display: flex;
background-color: #101f49ac;
width:100%;

@media screen and (max-width: 770px) {
  display: flex;
  flex-direction: column;
   height: 1000px;

   
    
    }

`;
export const GridForm = styled.div`
  background-color: #00b7ff;  
`;

export const FildForm = styled.div`
  display: flex;
  margin: auto;  
  flex-direction: column;
 
  padding: 10px;
  color: #ffffff; 

  @media screen and (max-width: 770px) {
 
  
    width: 350px;
    height: 100%;
   
    
    } 
`;

