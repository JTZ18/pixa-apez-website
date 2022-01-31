import React from 'react';
import styled from 'styled-components';

function Header() {
  return( 
  <Container>
      <img src='/LOGO_Header.png'/>
      <NavMenu>
        <a>
            <span>About</span>
        </a>
        <a>
            <span>Team</span>
        </a>
        <a>
            <span>Roadmap</span>
        </a>
        <a>
            <span>FAQs</span>
        </a>
        <a>
            <span>Mint</span>
        </a>
      </NavMenu>
      <Socials>
        <a>
            <img src='/opensea.png'/>
        </a>
        <a>
            <img src='/Discord.png'/>
        </a>
        <a>
            <img src='/Twitter.png'/>
        </a>
      </Socials>
  </Container>
  );}

export default Header;

const Container = styled.div`
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 8%;
        margin-top: 1%;
        margin-left: 1%;
        margin-bottom: 1%;
    }
`

const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;

    a {
        margin-left: 5%;
        font-size: 1.4em;
        padding-left: 5%;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const Socials = styled.div`
    display: flex;
    width: 20%;
    justify-content: flex-end;
    align-items: center;


    a {
        cursor: pointer;
        img{
            width: 20px;
            padding: 7px;
        }
    }


    
`