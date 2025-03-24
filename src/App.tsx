import React from 'react';
import './App.css';
import PromptBuilderForm from './components/PromptBuilderForm';
import logo from './logo.svg';

function App() {
  return (
    <div className="gannet-app">
      <header className="gannet-header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <img src={logo} alt="GANNET Logo" className="gannet-logo" />
            </div>
            <h1 className="gannet-title">GANNET Prompt Builder</h1>
          </div>
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
