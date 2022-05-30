import styled from "styled-components";


export const Container = styled.div`
width: 100%;
margin-top:10rem;
display: flex;
align-items: center;
justify-content: center;

button{
  padding: 0.7rem 1rem;
  border: 2px solid #CCF381;
  border-radius: 0.25rem;
  color: #CCF381;
  background-color: #4831D4;
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
}

`



