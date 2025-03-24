import React from 'react';
import { FormData, roles } from '../types';

interface RoleSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ formData, setFormData }) => {
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, role: e.target.value });
  };

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 1: Select Your Role</h2>
      <p className="gannet-step-description">Please select the role that best describes your position:</p>
      
      <div className="gannet-radio-group">
        {roles.map((role) => (
          <label key={role} className="gannet-radio-label">
            <input
              type="radio"
              name="role"
              value={role}
              checked={formData.role === role}
              onChange={handleRoleChange}
              className="gannet-radio-input"
            />
            {role}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RoleSelection; 