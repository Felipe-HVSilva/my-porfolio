import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


 
  height: 90vh;

  h1 {
    font-size: 6rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    max-width: 31.25rem;
    text-align: left;

    margin-top: 1.25rem;
  }

  a {
    display: inline-block;
    padding: 1rem 1.25rem;

    margin-top: 1.25rem;

    background: #FF6464;
    border: none;
    border-radius: 4px;

    color: #fff;
    font-weight: bold;

    cursor: pointer;

    transition: filter 0.2s ease-in;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width:998px) {
    height: 60vh;
  }

  @media (max-width:489px) {
    padding: 0 1.5rem;
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 0.875rem;
      
    }
  }

`