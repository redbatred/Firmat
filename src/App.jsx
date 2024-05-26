import { useState } from 'react'
import './App.css'
import Header from './header/Header.jsx'

function App () {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to my React app!</h2>
        {/* Other components and content can go here */}
      </main>
    </div>
  );
}


export default App
