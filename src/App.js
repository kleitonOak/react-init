import Header from './components/Header';
import styled from 'styled-components';
import Search from './components/Search';
import Release from './components/Release';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #4d66f5 35%, #9198e5);
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <Release/>
    </AppContainer>
  );
}

export default App;
