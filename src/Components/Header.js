import React from 'react';
import styled from 'styled-components';

function Header() {
  return( 
  <Container>
      <img src='/LOGO_Header.png'/>
  </Container>
  );}

export default Header;

const Container = styled.div`
    background-color: rgba(0,0,0,0.5);
    display: flex;

    img {
        width: 10%;
        margin-top: 1%;
        margin-left: 1%;
        margin-bottom: 1%;
    }
`