import styled from 'styled-components';
import Home from './pages/Home';
import Navbar from './pages/components/Navbar';

function App() {
  return (
    <DIV className="App">
      <Home/>
      <Navbar/>
    </DIV>
  );
}

export default App;

const DIV = styled.div`
  height: 100vh;
  max-width: 412px;
  margin: 0 auto;
`
