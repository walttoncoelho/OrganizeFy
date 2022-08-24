import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1920px;
  padding: 20px;  
  flex-wrap: wrap;
`;

export const Section = styled.div`
display: flex;
margin: auto;
flex-direction: column;
max-width: 1440px;



h3{
  display: flex;
  align-items: flex-start;
  color: #1B6DC6;
  margin-top: -10px;
  margin-left: 20px;
}
  
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #F1F1F1;
  max-width: 300px;
  min-height: 300px;
  padding: 2rem;
  margin:2px;
  border-radius: 5px;
  

  h4{
    color: #0451A4
  }

  img{
    width: 80px;
    margin: auto;
  }

  p{
    padding: 5px;
    margin: auto;
    text-align: center;
  }
 
`;