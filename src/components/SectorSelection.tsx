import React from 'react';
import { FormData, sectors } from '../types';

interface SectorSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SectorSelection: React.FC<SectorSelectionProps> = ({ formData, setFormData }) => {
  const handleSectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (isChecked) {
      setFormData({ ...formData, sectors: [...formData.sectors, value] });
    } else {
      setFormData({ 
        ...formData, 
        sectors: formData.sectors.filter(sector => sector !== value) 
      });
    }
  };

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 3: Sector Focus</h2>
      <p className="gannet-step-description">Select your humanitarian sector(s) of interest:</p>
      
      <div className="gannet-checkbox-group">
        {sectors.map((sector) => (
          <label key={sector} className="gannet-checkbox-label">
            <input
              type="checkbox"
              name="sector"
              value={sector}
              checked={formData.sectors.includes(sector)}
              onChange={handleSectorChange}
              className="gannet-checkbox-input"
            />
            {sector}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SectorSelection; 