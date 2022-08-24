import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1920px;
  padding: 20px;  
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  >:hover{
    background-color: #f5f5f5;
  }
`;

export const Section = styled.div`
display: flex;
margin: auto;
flex-direction: column;
max-width: 1444px;

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
  max-width: 310px;
  min-height: 300px;
  margin: 9px;
  border-radius: 5px;  
  text-align: center;
  justify-content: center;
  align-items: center;
  
  h4{
    display: flex;
    margin: auto;
    color: #0451A4;
    
  }
  
  img{
    display: flex;
    width: 80px;
    margin: auto;
    margin-bottom: -10px;

  }

  p{ 
    display: flex;
    margin: auto;
    padding: 15px;
    text-align: center;
    justify-content: center;
  }

  `;

  export const CardText = styled.div`
  flex-direction: column;
  display: flex;
  margin: auto;
  align-items: flex-start;
  `;