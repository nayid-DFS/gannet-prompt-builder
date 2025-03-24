import React from 'react';
import { FormData } from '../types';

interface GeneratedPromptProps {
  formData: FormData;
}

const GeneratedPrompt: React.FC<GeneratedPromptProps> = ({ formData }) => {

  // Define the formatList function to format countries and sectors correctly
  const formatList = (items: string[]): string => {
    if (items.length === 1) return items[0];
    return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
  };
  
  const generatePrompt = (): string => {
    const { role, countries, sectors, timeframe, outputFormat, specificQuestion } = formData;
    
    let prompt = `As a ${role}, I require detailed information on ${formatList(sectors)} in ${formatList(countries)} for the ${timeframe}. `;
    prompt += `This information should include key trends, challenges, and relevant data points. `;
    prompt += `Additionally, please include analysis on recent developments, potential future implications, and critical indicators to monitor. `;
    prompt += `Please present the findings in the format of a ${outputFormat}, ensuring clarity, conciseness, and actionable insights.`;
  
    
    if (specificQuestion) {
      prompt += ` Specifically, I want to know: ${specificQuestion}`;
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

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt());
  };

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 7: Generated Prompt</h2>
      <p className="gannet-step-description">
        Your customized prompt for the GANNET Virtual Assistant is ready:
      </p>
      
      <textarea
        value={generatePrompt()}
        readOnly
        className="gannet-textarea gannet-generated-prompt"
      ></textarea>
      
      <div className="gannet-button-container">
        <button className="gannet-button" onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default GeneratedPrompt; 