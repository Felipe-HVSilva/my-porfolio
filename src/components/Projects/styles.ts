import { styled } from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding-bottom: 3rem;

  h2 {
    text-align: center;
  }

  .content {
    margin-top: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    a {
      transition:  transform 0.2s;

      img {
        max-width: 500px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    @media (max-width:1100px) {
      flex-direction: column;

      a {

        img {
          max-width: 400px;
        }
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`