import React, { useState } from 'react';
import './App.css';
import { 
  roles, 
  sectors, 
  countries, 
  timeframes, 
  outputFormats 
} from './types';

interface FormData {
  role: string;
  countries: string[];
  sectors: string[];
  timeframe: string;
  outputFormat: string;
  specificQuestion: string;
}

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    role: '',
    countries: [],
    sectors: [],
    timeframe: '',
    outputFormat: '',
    specificQuestion: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    // Validate current step
    if (step === 1 && !formData.role) {
      setError('Please select a role');
      return;
    }
    if (step === 2 && formData.countries.length === 0) {
      setError('Please select at least one country');
      return;
    }
    if (step === 3 && formData.sectors.length === 0) {
      setError('Please select at least one sector');
      return;
    }
    if (step === 4 && !formData.timeframe) {
      setError('Please select a timeframe');
      return;
    }
    if (step === 5 && !formData.outputFormat) {
      setError('Please select an output format');
      return;
    }

    setError(null);
    setStep(step + 1);
  };

  const handleBack = () => {
    setError(null);
    setStep(step - 1);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (isChecked) {
      setFormData({ 
        ...formData, 
        countries: [...formData.countries, value] 
      });
    } else {
      setFormData({ 
        ...formData, 
        countries: formData.countries.filter(country => country !== value) 
      });
    }
  };

  const handleSectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (isChecked) {
      setFormData({ 
        ...formData, 
        sectors: [...formData.sectors, value] 
      });
    } else {
      setFormData({ 
        ...formData, 
        sectors: formData.sectors.filter(sector => sector !== value) 
      });
    }
  };

  const handleTimeframeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, timeframe: e.target.value });
  };

  const handleOutputFormatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, outputFormat: e.target.value });
  };

  const handleSpecificQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, specificQuestion: e.target.value });
  };

  const generatePrompt = (): string => {
    const { role, countries, sectors, timeframe, outputFormat, specificQuestion } = formData;
    
    // Helper function to format lists correctly
    const formatList = (items: string[]): string => {
      if (items.length === 0) return '';
      if (items.length === 1) return items[0];
      return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
    };
    
    let prompt = `As a ${role}, I require detailed information on ${formatList(sectors)} in ${formatList(countries)} for the ${timeframe}. `;
    prompt += `This information should include key trends, challenges, and relevant data points. `;
    prompt += `Additionally, please include analysis on recent developments, potential future implications, and critical indicators to monitor. `;
    prompt += `Please present the findings in the format of a ${outputFormat.split(':')[0]}, ensuring clarity, conciseness, and actionable insights. `;
    
    if (specificQuestion) {
      prompt += `Specifically, I want to know: ${specificQuestion}`;
    }
    
    // Add current date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    prompt += ` Today is ${formattedDate}.`;
    
    return prompt;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt());
    alert('Copied to clipboard!');
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="step-container">
            <h2>Step 1: Select Your Role</h2>
            <p>Please select the role that best describes your position:</p>
            <div className="options-container">
              {roles.map(role => (
                <div key={role} className="option">
                  <input
                    type="radio"
                    id={role}
                    name="role"
                    value={role}
                    checked={formData.role === role}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor={role}>{role}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-container">
            <h2>Step 2: Geographic Focus</h2>
            <p>Select the country or countries of interest:</p>
            <div className="options-container scrollable">
              {countries.map(country => (
                <div key={country} className="option">
                  <input
                    type="checkbox"
                    id={country}
                    name="country"
                    value={country}
                    checked={formData.countries.includes(country)}
                    onChange={handleCountryChange}
                  />
                  <label htmlFor={country}>{country}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-container">
            <h2>Step 3: Sector Focus</h2>
            <p>Select your humanitarian sector(s) of interest:</p>
            <div className="options-container">
              {sectors.map(sector => (
                <div key={sector} className="option">
                  <input
                    type="checkbox"
                    id={sector}
                    name="sector"
                    value={sector}
                    checked={formData.sectors.includes(sector)}
                    onChange={handleSectorChange}
                  />
                  <label htmlFor={sector}>{sector}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-container">
            <h2>Step 4: Timeframe</h2>
            <p>Select your timeframe of interest:</p>
            <div className="options-container">
              {timeframes.map(timeframe => (
                <div key={timeframe} className="option">
                  <input
                    type="radio"
                    id={timeframe}
                    name="timeframe"
                    value={timeframe}
                    checked={formData.timeframe === timeframe}
                    onChange={handleTimeframeChange}
                  />
                  <label htmlFor={timeframe}>{timeframe}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step-container">
            <h2>Step 5: Output Format Preference</h2>
            <p>Choose how you want the information presented:</p>
            <div className="options-container">
              {outputFormats.map(format => (
                <div key={format} className="option">
                  <input
                    type="radio"
                    id={format}
                    name="outputFormat"
                    value={format}
                    checked={formData.outputFormat === format}
                    onChange={handleOutputFormatChange}
                  />
                  <label htmlFor={format}>{format}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="step-container">
            <h2>Step 6: Specific Question (optional)</h2>
            <p>Add a specific question or request to further refine your prompt:</p>
            <textarea
              value={formData.specificQuestion}
              onChange={handleSpecificQuestionChange}
              placeholder="Enter your specific question here..."
              rows={5}
              className="specific-question"
            />
          </div>
        );
      case 7:
        return (
          <div className="step-container">
            <h2>Step 7: Generated Prompt</h2>
            <p>Your customized prompt for the GANNET Virtual Assistant is ready:</p>
            <textarea
              value={generatePrompt()}
              readOnly
              rows={8}
              className="generated-prompt"
            />
            <div className="button-container-right">
              <button onClick={copyToClipboard} className="copy-button">
                Copy to Clipboard
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Calculate progress percentage
  const progress = (step / 7) * 100;

  return (
    <div className="App">
      <header className="App-header">
        <h1>GANNET Prompt Builder</h1>
        <p>A step-by-step tool to help you create effective queries for the GANNET Virtual Assistant</p>
      </header>
      <main>
        <div className="prompt-builder-container">
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          
          {renderStep()}
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="button-container">
            <button 
              onClick={handleBack} 
              disabled={step === 1}
              className={step === 1 ? 'button-disabled' : 'button-back'}
            >
              Back
            </button>
            
            {step < 7 ? (
              <button onClick={handleNext} className="button-next">
                Next
              </button>
            ) : (
              <button onClick={() => setStep(1)} className="button-restart">
                Start Over
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
