import React from 'react';
import './App.css';
import { links } from './links';
import Block from './components/Block'

function App() {
  return (
    <div className="App">
      <div className="App__blockWrapper">
        <div className="App__blockWrapper__header">
          <p>Logo Here</p>
        </div>
        {
          links.map((link: Link) => <Block link={link} />)
        }
      </div>
    </div>
  );
}

export default App;
