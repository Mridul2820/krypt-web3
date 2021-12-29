import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Services from './components/Services'
import Transaction from './components/Transaction'
import Wellcome from './components/Wellcome'

const App = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <NavBar />
                <Wellcome />
            </div>
            <Services />
            <Transaction />
            <Footer />
        </div>
    )
}

export default App
