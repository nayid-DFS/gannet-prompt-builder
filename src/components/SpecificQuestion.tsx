import React from 'react';
import { Box, Heading, Text, Textarea } from '@chakra-ui/react';
import { FormData } from '../types';

interface SpecificQuestionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SpecificQuestion: React.FC<SpecificQuestionProps> = ({ formData, setFormData }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Step 6: Specific Question (optional)</Heading>
      <Text mb={4}>Add a specific question or request to further refine your prompt:</Text>
      <Textarea
        value={formData.specificQuestion}
        onChange={(e) => setFormData({ ...formData, specificQuestion: e.target.value })}
        placeholder="Enter your specific question here..."
        size="md"
        resize="vertical"
        minHeight="100px"
      />
    </Box>
  );
};

export default SpecificQuestion; 