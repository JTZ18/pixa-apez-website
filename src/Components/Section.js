import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
  <Container>
    <h1>Pixa Apes</h1>
    <p>A collection of XXXX Pixa Apez</p>
    <TextContainer>
        <p>
            XXXX Pixa Apez released into the wild. Into the wilderness, lost without any thoughts or hopes, wandering aimlessly in the world of the unknown. Found by ‘Degends’ 
        </p>
    </TextContainer>


  </Container>
  );
}

export default Section;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #262b35;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 6rem;
        text-decoration: underline;

    }

    p {
        font-size: 3rem;
    }

`

const TextContainer = styled.div`
    display: flex;
    padding: 3rem;

    p {
        text-align: center;
        text-justify: inter-word;
        letter-spacing: 0.1rem;
        line-height: 3rem;
        font-size: 2.5rem;
    }

`