import React from 'react';
import { FormData, countries } from '../types';

interface CountrySelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CountrySelection: React.FC<CountrySelectionProps> = ({ formData, setFormData }) => {
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (isChecked) {
      setFormData({ ...formData, countries: [...formData.countries, value] });
    } else {
      setFormData({ 
        ...formData, 
        countries: formData.countries.filter(country => country !== value) 
      });
    }
  };

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 2: Geographic Focus</h2>
      <p className="gannet-step-description">Select the country or countries of interest:</p>
      
      <div className="gannet-checkbox-scroll">
        {countries.map((country) => (
          <label key={country} className="gannet-checkbox-label">
            <input
              type="checkbox"
              name="country"
              value={country}
              checked={formData.countries.includes(country)}
              onChange={handleCountryChange}
              className="gannet-checkbox-input"
            />
            {country}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CountrySelection; 