import styled from "styled-components";

export const Section = styled.div`
max-width: 1920px;
background-color: #1B6DC6;
display: flex;
margin: auto;
flex-direction: column;
border-top-right-radius: 10px;
border-top-left-radius: 10px;

h3{
  margin-top: 50px;
  color: #ffffff;
}
  
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1400px;
  padding: 5px;
  
`;

export const Description = styled.div`
display: flex;
margin: auto;
p{
  
  justify-content: flex-start;
  color: #ffff00;
  text-align: left;
  align-items: flex-start;

  
}
`;


export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 5px;
  max-width: 300px;
  min-height: 450px;


  h4{
    
    color: #ffffff;
  }

  img{
    width: 80px;
    margin: auto;
    box-shadow: #110808;
    border: solid 2px #f3f3f36e;
    border-radius: 100%;
    
  }

  p{
    padding: 5px;
    margin: auto;
    text-align: center;
    color: #ffffff;
  }
 
`;