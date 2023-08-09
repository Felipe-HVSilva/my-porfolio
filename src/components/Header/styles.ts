import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;

  padding: 1.5rem 0rem;

  ul {
    list-style: none;
    display: flex;
    gap: 3rem;
    li {
      a {
        svg {
          color: #000;
          transition: color 0.2s;
        }
        &:hover {
          svg {
            color:  #FF6464;
          }
        }
      }
    }
  }
  
`