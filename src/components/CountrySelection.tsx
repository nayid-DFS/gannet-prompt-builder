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

  const handleRemoveCountry = (countryToRemove: string) => {
    setFormData({
      ...formData,
      countries: formData.countries.filter(country => country !== countryToRemove)
    });
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
      
      {formData.countries.length > 0 && (
        <div className="gannet-selected-tags" style={{ 
          marginBottom: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          padding: '0.5rem',
          backgroundColor: '#1a222f',
          borderRadius: '4px',
          minHeight: '2.5rem'
        }}>
          {formData.countries.map((country) => (
            <span
              key={country}
              className="gannet-tag"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.25rem 0.75rem',
                backgroundColor: '#10151c',
                borderRadius: '16px',
                fontSize: '0.875rem',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background-color 0.2s'
              }}
              onClick={() => handleRemoveCountry(country)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#88fca4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#10151c';
              }}
            >
              {country}
              <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem' }}>×</span>
            </span>
          ))}
        </div>
      )}

      <div className="gannet-search-container" style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="gannet-search-input"
          style={{
            width: '33%',
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