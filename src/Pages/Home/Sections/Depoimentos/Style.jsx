import styled from "styled-components";

export const Section = styled.div`
max-width: 1920px;
display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #1B6DC6;
  flex-direction: column;  
`;

export const BoxTitle = styled.div`
width: 1440px;
display: flex;
margin: auto;
align-items: flex-start;

@media screen and (max-width: 770px) {
    width:350px;
    margin-top: -10px;  
   
       h1{
         text-align: center;
       }
    }


h3{
  width:100%;
  display: flex;
  margin-top: 50px;
  color: #ffffff;
  justify-content: left;
  align-items: flex-end;
  text-align: start;  
  padding: 20px;


}
  
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1440px;
  padding: 5px;
  flex-wrap: wrap;
 
  
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
  max-width: 310px;
  min-width: 310px;
  min-height: 300px;
  margin: 20px;
  border-radius: 5px;  
  text-align: center; 
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 770px) {
    width:350px;

    margin: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
   
    
    }


  h4{
    
    color: #ffffff;
  }

  img{
    width: 128px;
    margin: auto;
    box-shadow: #110808;
    /* border: solid 2px #f3f3f36e;
    border-radius: 100%; */
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.25));
    
  }

  p{
    padding: 15px;
    margin: auto;
    text-align: left;
    color: #ffffff;
  }
 
`;