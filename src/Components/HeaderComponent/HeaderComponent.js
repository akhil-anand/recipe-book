import React from 'react'
import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import SettingHorizontalIcon from '@rsuite/icons/SettingHorizontal';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = ({setOpenDrawer}) => {

    const navigate = useNavigate()

    return (
        <Nav className=''>
            <Nav.Item onClick={() => navigate('/recipe-book')}icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item onClick={() => navigate('/Collections')}>Collections</Nav.Item>
            <Nav.Item icon={<SettingHorizontalIcon size="5em"/>} onClick={() => setOpenDrawer(true)}>Open Drawer</Nav.Item>
        </Nav>
    )
}

export default HeaderComponent