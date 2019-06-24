import React from 'react'
import './App.css'
import Message from './Message'

const App: React.FC = () => {
    return (
        <div className="App">
            <Message name="Sergio" message="Hi there folks!" />
        </div>
    )
}

export default App
