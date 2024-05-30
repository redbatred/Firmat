import { useState } from 'react'
import './App.css'
// import MyHeader from './components/header/MyHeader';
import HeaderYoutube from './components/header-youtube/HeaderYoutube';

function App() {
  return (
    <div className="App">
      <HeaderYoutube />
      <main>
        <h2>Welcome to my React app!</h2>
        {/* Other components and content can go here */}
      </main>
    </div>
  );
}

export default App;
