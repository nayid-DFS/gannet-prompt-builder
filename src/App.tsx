import React from 'react';
import './App.css';
import PromptBuilderForm from './components/PromptBuilderForm';

function App() {
  return (
    <div className="gannet-app">
      <header className="gannet-header">
        <div className="container">
          <h1 className="gannet-title">GANNET Prompt Builder</h1>
        </div>
      </header>
      
      <div className="container">
        <PromptBuilderForm />
      </div>
      
      <footer className="gannet-footer">
        <div className="container">
          Errors are possible with GANNET. It is advisable to verify crucial information.
        </div>
      </footer>
    </div>
  );
}

export default App;
