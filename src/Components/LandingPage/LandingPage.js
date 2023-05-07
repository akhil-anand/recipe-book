import React from 'react'
import IntroPanel from './IntroPanel/IntroPanel'
import CreateCollection from './CreateCollection/CreateCollection'
import OrganizeKitchen from './OrganizeKitchen/OrganizeKitchen'

const LandingPage = () => {
    return (
        <>
            <IntroPanel />
            <CreateCollection />
            <OrganizeKitchen />
        </>
    )
}

export default LandingPage