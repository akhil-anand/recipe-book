import React from 'react'
import { Button, Drawer, Placeholder } from 'rsuite'

const DrawerComponent = ({openDrawer, setOpenDrawer}) => {
    return (
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
                <Drawer.Actions>
                    <Button onClick={() => setOpenDrawer(false)}>Cancel</Button>
                    <Button onClick={() => setOpenDrawer(false)} appearance="primary">
                        Confirm
                    </Button>
                </Drawer.Actions>
            </Drawer.Header>
            <Drawer.Body>
                <Placeholder.Paragraph />
            </Drawer.Body>
        </Drawer>
    )
}

export default DrawerComponent