import React from 'react'
import './App.css'
import Message from './Message'
import LimitedField from './LimitedField'

const App: React.FC = () => {
    return (
        <div className="App">
            <Message name="Sergio" message="Hi there folks!" />
            <LimitedField maxLength={30} text="Enter >= 30 chars" />
        </div>
    )
}

export default App
