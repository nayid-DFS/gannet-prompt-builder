import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { FormData, roles } from '../types';

interface RoleSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ formData, setFormData }) => {
  const handleChange = (value: string) => {
    setFormData({ ...formData, role: value });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Step 1: Select Your Role</Heading>
      <Text mb={4}>Please select the role that best describes your position:</Text>
      <RadioGroup 
        onChange={handleChange}
        value={formData.role}
      >
        <Flex direction="column" gap={2}>
          {roles.map((role) => (
            <Radio key={role} value={role}>
              {role}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
    </Box>
  );
};

export default RoleSelection; 