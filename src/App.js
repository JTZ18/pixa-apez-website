import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import SectionMain from './Components/SectionMain';
import Section from './Components/Section';

function App() {
  return (
    <Container>
      <Header/>
      <SectionMain/>
      <Section/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #262b35;
  width: 100vw;
  height: 100vh;

`