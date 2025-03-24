import React, { useState } from 'react';
import RoleSelection from './RoleSelection';
import CountrySelection from './CountrySelection';
import SectorSelection from './SectorSelection';
import TimeframeSelection from './TimeframeSelection';
import OutputFormatSelection from './OutputFormatSelection';
import SpecificQuestion from './SpecificQuestion';
import GeneratedPrompt from './GeneratedPrompt';
import { FormData } from '../types';

const PromptBuilderForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    role: '',
    countries: [],
    sectors: [],
    timeframe: '',
    outputFormat: '',
    specificQuestion: ''
  });

  const totalSteps = 7;

  const handleNext = () => {
    if (step === 1 && !formData.role) {
      alert('Please select a role');
      return;
    }

    if (step === 2 && formData.countries.length === 0) {
      alert('Please select at least one country');
      return;
    }

    if (step === 3 && formData.sectors.length === 0) {
      alert('Please select at least one sector');
      return;
    }

    if (step === 4 && !formData.timeframe) {
      alert('Please select a timeframe');
      return;
    }

    if (step === 5 && !formData.outputFormat) {
      alert('Please select an output format');
      return;
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <RoleSelection formData={formData} setFormData={setFormData} />;
      case 2:
        return <CountrySelection formData={formData} setFormData={setFormData} />;
      case 3:
        return <SectorSelection formData={formData} setFormData={setFormData} />;
      case 4:
        return <TimeframeSelection formData={formData} setFormData={setFormData} />;
      case 5:
        return <OutputFormatSelection formData={formData} setFormData={setFormData} />;
      case 6:
        return <SpecificQuestion formData={formData} setFormData={setFormData} />;
      case 7:
        return <GeneratedPrompt formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="gannet-form">
      <div className="gannet-progress-bg">
        <div 
          className="gannet-progress-bar" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>
      
      {renderStep()}
      
      <div className="gannet-form-buttons">
        <button
          className={`gannet-button-outline ${step === 1 ? 'disabled' : ''}`}
          onClick={handleBack}
          disabled={step === 1}
        >
          Back
        </button>
        
        {step < totalSteps ? (
          <button className="gannet-button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button 
            className="gannet-button-green"
            onClick={() => setStep(1)}
          >
            Start Over
          </button>
        )}
      </div>
    </div>
  );
};

export default PromptBuilderForm; 