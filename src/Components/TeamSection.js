import React from 'react';
import styled from 'styled-components';

function TeamSection() {
  return (
  <Container>
    <h1>Team</h1>
    <Content>
        <PFPcontainer>
            <img src='/Batman.png'/>
            <Title>
                <p>Morpheus Developer</p>
            </Title>           
        </PFPcontainer>
        <PFPcontainer>
            <img src='/Royal_Ghost.png'/>
            <Title>
                <p>Zeus Artist</p>

            </Title>
        </PFPcontainer>
    </Content>
  </Container>
  );
}

export default TeamSection;

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
`
const PFPcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    img {
        width: 50%;
    }

`
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;

    width: 10%;

    p {
        word-wrap: break-word;
        font-size: 2rem;
        text-align: center;
    }

`