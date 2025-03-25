import React from 'react';
import { FormData, outputFormats } from '../types';

interface OutputFormatSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const OutputFormatSelection: React.FC<OutputFormatSelectionProps> = ({ formData, setFormData }) => {
  const handleOutputFormatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, outputFormat: e.target.value });
  };

  const isTabularFormat = (format: string) => format.includes('Tabular Format');

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 5: Output Format Preference</h2>
      <p className="gannet-step-description">Choose how you want the information presented:</p>
      
      <div className="gannet-radio-group">
        {outputFormats.map((format) => (
          <label 
            key={format} 
            className={`gannet-radio-label ${isTabularFormat(format) ? 'disabled' : ''}`}
            style={isTabularFormat(format) ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
          >
            <input
              type="radio"
              name="outputFormat"
              value={format}
              checked={formData.outputFormat === format}
              onChange={handleOutputFormatChange}
              className="gannet-radio-input"
              disabled={isTabularFormat(format)}
            />
            {format}
          </label>
        ))}
      </div>
    </div>
  );
};

export default OutputFormatSelection; 