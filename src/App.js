import logo from './logo.svg';
import './App.css';
import { Container } from 'rsuite';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container className='m-5'>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
