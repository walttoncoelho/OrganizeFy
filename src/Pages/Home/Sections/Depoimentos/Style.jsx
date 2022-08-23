import styled from "styled-components";

export const Section = styled.div`
background-color: #1B6DC6;

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

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 5px;
  max-width: 300px;
  min-height: 300px;

  h4{
    
    color: #ffffff;
  }

  img{
    width: 80px;
    margin: auto;
  }

  p{
    padding: 5px;
    margin: auto;
    text-align: center;
    color: #ffffff;
  }
 
`;