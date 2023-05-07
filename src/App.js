import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'rsuite';
import { Outlet } from 'react-router-dom';
import RoutesConfig from './routesConfig';
import DrawerComponent from './Components/DrawerComponent/DrawerComponent';
import { useState } from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';

function App() {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className="App">
      <HeaderComponent setOpenDrawer={setOpenDrawer}/>
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
      <Container className='m-5'>
        {/* <Outlet /> */}
        <RoutesConfig />
      </Container>
    </div>
  );
}

export default App;
