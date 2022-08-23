import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1400px;

  padding: 5px;
  
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 5px;
  background-color: #F1F1F1;
  max-width: 300px;
  min-height: 300px;
  

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