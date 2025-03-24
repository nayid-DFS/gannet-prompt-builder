import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
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
    <Box maxW="800px" mx="auto" p={5}>
      <Box w="100%" h="8px" bg="gray.100" borderRadius="md" mb={10}>
        <Box w={`${(step / totalSteps) * 100}%`} h="100%" bg="blue.500" borderRadius="md" />
      </Box>
      
      {renderStep()}
      
      <Flex mt={5} justifyContent="space-between">
        <Button
          colorScheme="gray"
          onClick={handleBack}
          disabled={step === 1}
        >
          Back
        </Button>
        
        {step < totalSteps ? (
          <Button colorScheme="blue" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button 
            colorScheme="green" 
            onClick={() => setStep(1)}
          >
            Start Over
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default PromptBuilderForm; 