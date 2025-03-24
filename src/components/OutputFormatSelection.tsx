import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { FormData, outputFormats } from '../types';

interface OutputFormatSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const OutputFormatSelection: React.FC<OutputFormatSelectionProps> = ({ formData, setFormData }) => {
  const handleChange = (value: string) => {
    setFormData({ ...formData, outputFormat: value });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Step 5: Output Format Preference</Heading>
      <Text mb={4}>Choose how you want the information presented:</Text>
      <RadioGroup 
        onChange={handleChange}
        value={formData.outputFormat}
      >
        <Flex direction="column" gap={2}>
          {outputFormats.map((format) => (
            <Radio key={format} value={format}>
              {format}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
    </Box>
  );
};

export default OutputFormatSelection; 