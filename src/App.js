import logo from './logo.svg';
import './App.css';
import IntroPanel from './Components/IntroPanel/IntroPanel';
import { Container } from 'rsuite';
import CreateCollection from './Components/CreateCollection/CreateCollection';
import OrganizeKitchen from './Components/OrganizeKitchen/OrganizeKitchen';

function App() {
  return (
    <div className="App">
      <Container className='m-5'>
        <IntroPanel />
        <CreateCollection />
        <OrganizeKitchen />
      </Container>
    </div>
  );
}

export default App;
