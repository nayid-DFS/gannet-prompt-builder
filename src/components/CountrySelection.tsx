import React, { useState, useMemo } from 'react';
import { FormData, countries } from '../types';

interface CountrySelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CountrySelection: React.FC<CountrySelectionProps> = ({ formData, setFormData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'Global') {
      // If Global is selected, clear all other selections
      setFormData({ 
        ...formData, 
        countries: isChecked ? ['Global'] : [] 
      });
      return;
    }

    // If selecting a specific country while Global is selected, remove Global
    if (isChecked && formData.countries.includes('Global')) {
      setFormData({ 
        ...formData, 
        countries: [value] 
      });
      return;
    }
    
    if (isChecked) {
      setFormData({ ...formData, countries: [...formData.countries, value] });
    } else {
      setFormData({ 
        ...formData, 
        countries: formData.countries.filter(country => country !== value) 
      });
    }
  };

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries;
    return countries.filter(country => 
      country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 2: Geographic Focus</h2>
      <p className="gannet-step-description">Select the country or countries of interest:</p>
      
      <div className="gannet-search-container" style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="gannet-search-input"
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
      </div>

      <div className="gannet-checkbox-scroll">
        {filteredCountries.map((country) => (
          <label 
            key={country} 
            className={`gannet-checkbox-label ${country === 'Global' ? 'global-option' : ''}`}
            style={country === 'Global' ? { 
              fontWeight: 'bold',
              borderBottom: '1px solid #ddd',
              paddingBottom: '0.5rem',
              marginBottom: '0.5rem'
            } : undefined}
          >
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