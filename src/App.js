import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';

function App() {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #262b35;
  width: 100vw;
  height: 100vh;
`