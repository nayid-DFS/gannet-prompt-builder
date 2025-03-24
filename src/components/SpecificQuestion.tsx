import React from 'react';
import { FormData } from '../types';

interface SpecificQuestionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SpecificQuestion: React.FC<SpecificQuestionProps> = ({ formData, setFormData }) => {
  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, specificQuestion: e.target.value });
  };

  return (
    <div className="gannet-card">
      <h2 className="gannet-step-title">Step 6: Specific Questions</h2>
      <p className="gannet-step-description">
        If you have any specific questions or focus areas, please enter them below (optional):
      </p>
      
      <textarea
        value={formData.specificQuestion}
        onChange={handleQuestionChange}
        placeholder="E.g., What are the primary health concerns for displaced populations in the region?"
        className="gannet-textarea"
      ></textarea>
    </div>
  );
};

export default SpecificQuestion; 