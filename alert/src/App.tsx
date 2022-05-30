import React, { useState } from 'react';
import './App.css';

function App() {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="App">
      <button type="button" id="alert-trigger" onClick={() => setTriggered(!triggered)}>
        Toggle Alert
      </button>
      <div id="example" role="alert">
        {triggered && <p>Hello</p>}
      </div>
    </div>
  );
}

export default App;
