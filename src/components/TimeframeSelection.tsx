import React from 'react';
import { FormData, timeframes } from '../types';

interface TimeframeSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const TimeframeSelection: React.FC<TimeframeSelectionProps> = ({ formData, setFormData }) => {
  const handleTimeframeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, timeframe: e.target.value });
  };

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 4: Timeframe</h2>
      <p className="gannet-step-description">Select your timeframe of interest:</p>
      
      <div className="gannet-radio-group">
        {timeframes.map((timeframe) => (
          <label key={timeframe} className="gannet-radio-label">
            <input
              type="radio"
              name="timeframe"
              value={timeframe}
              checked={formData.timeframe === timeframe}
              onChange={handleTimeframeChange}
              className="gannet-radio-input"
            />
            {timeframe}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TimeframeSelection; 