import styled from "styled-components";

export const Container = styled.header`
  position: relative;
`;

export const Grid = styled.div`
  max-width: 1920px; 
  display: flex;
  margin: auto;
 

  > img {
    display: flex;
    margin: auto;
    width: 200px;
    height: 100%;
    padding: 10px;
    margin-left: 25px;
  }
`;


export const Grid1 = styled.nav`

  display: flex;
  flex-direction: row;
  width: 100%;
 
  
  @media (max-width: 700px) {
    width: 100%;
  }
  
  section {
    display: flex;
    margin: auto;
    gap: 2rem;


    img {
      width: 30px;
      @media (max-width: 700px) {
        width: 20px;
      }
    }

    > nav {
      display: flex;
      margin: auto;
    

      @media (max-width: 700px) {
        display: none;
      }

      /* Menu Principal */
      ul {
        width: 100%;
        display: flex;
        list-style-type: none;

        li {
          margin: auto;
          display: inline-block;
          svg {
            width: 45px;
            display: flex;
            fill: #20c997;
            padding: 5px;
          }

          a {
            width:100%;
            height: 50px;          
            display: flex;
            margin: auto;
            text-decoration: none;
            color: #0451A4;
            font-size: 1.2rem;
            font-weight: 300;
            transition: 0.2s;
            text-align: center;
            justify-content: center;
            align-items: center;
            padding-right: 25px;
            
            :hover {
                background-color: #19258f;
                color: #ececec;
              }      
              
              
          
          }
          /* submenu */

          ul {
            display: none;
            background-color: #34bd7d;
          }
          &:hover ul {
            position: absolute;
            width: 300px;
            margin: auto;
            display: flex;
            flex-direction: column;
            border-radius: 4px;
            /* Adicionar um Popup */
            background-color: #34bd7d;
            box-shadow: 0px 0px 10px #037432;
            z-index: 1;
            transition: 0.2s;
            /* padding: 10px; */

            margin-left: -100px;
            margin-right: 10px;
            margin-bottom: 10px;
            &:hover {
              background-color: #34bd7d;
            }
          }

          li {
            margin: auto;
            display: flex;
            width: 100%;
           
            border: solid 1px #f3f3f3;

            a {
              color: #087741;
              font-size: 13px;
              align-items: center;

              :hover {
                color: #ececec;
              }
            }
          }
        }
      }
      .mobile {
        display: none;
        a {
          text-decoration: none;
          color: #fff;
        }
      }

      @media (max-width: 900px) {
        .mobile {
          display: initial;
        }
        > nav {
          display: none;
        }
      }

      font-size: 18px;
      position: relative;
      text-decoration: none;
      align-items: center;
      color: #fff;

      @media (max-width: 700px) {
        padding: 14.5px 16px;
        font-size: 20px;
        position: relative;
        text-decoration: none;
        align-items: center;
        color: #fff;
      }
    }
  }
`;

export const ColorChild = styled.div `
margin: auto;
display: flex;
padding-right: 25px;
border-right: solid 1px #FF5921;

   :last-child {
              background-color: #FF5921;
              a {
                color: #ececec;        
              }   
               }
`;

export const Grid2 = styled.div`
  display: flex;
  margin: auto;
  padding: 10px 10px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
`;

export const Hamburger = styled.div`
  background-color: #34b175;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  margin-left: 10px;

`;

export const SubLogo = styled.div`
display: flex;
margin: auto;
img {
  width: 90%;
}


  @media (max-width: 700px) {
    
    display: none;
  }


`;

export const Grid3 = styled.div`
  position: fixed;
  background-color: #110707;
  align-items: flex-end;
  margin: auto;


  @media (max-width: 700px) {
    padding: 14.5px 16px;
    font-size: 20px;
    position: relative;
    text-decoration: none;
    align-items: center;
    color: #fff;
  }

  @media (max-width: 700px) {
    order: 2;
  }
`;
