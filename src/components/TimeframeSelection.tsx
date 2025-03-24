import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { FormData, timeframes } from '../types';

interface TimeframeSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const TimeframeSelection: React.FC<TimeframeSelectionProps> = ({ formData, setFormData }) => {
  const handleChange = (value: string) => {
    setFormData({ ...formData, timeframe: value });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Step 4: Timeframe</Heading>
      <Text mb={4}>Select your timeframe of interest:</Text>
      <RadioGroup 
        onChange={handleChange}
        value={formData.timeframe}
      >
        <Flex direction="column" gap={2} alignItems="flex-start">
          {timeframes.map((timeframe) => (
            <Radio key={timeframe} value={timeframe}>
              {timeframe}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
    </Box>
  );
};

export default TimeframeSelection; 