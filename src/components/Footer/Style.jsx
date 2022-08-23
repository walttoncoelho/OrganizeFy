import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  background-color: #12111b;
  max-width: 1920px;
  height: 100px;

  img{
    width: 200px;
    padding: 10px;
    margin-left: 20px;
  }

  a{
    display: flex;
    color: #ffffff;
    text-align: end;
    text-decoration: none;
    justify-content: end;
    margin: auto;
    margin-right: 20px;
  }
`;