import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { FormData, sectors } from '../types';

interface SectorSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SectorSelection: React.FC<SectorSelectionProps> = ({ formData, setFormData }) => {
  const handleSectorChange = (values: (string | number)[]) => {
    const selectedSectors = values as string[];
    setFormData({ ...formData, sectors: selectedSectors });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Step 3: Sector Focus</Heading>
      <Text mb={4}>Select your humanitarian sector(s) of interest:</Text>
      <Box maxH="300px" overflowY="auto" p={2}>
        <CheckboxGroup 
          colorScheme="blue"
          onChange={handleSectorChange}
          value={formData.sectors}
        >
          <Flex direction="column" gap={2}>
            {sectors.map((sector) => (
              <Checkbox key={sector} value={sector}>
                {sector}
              </Checkbox>
            ))}
          </Flex>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default SectorSelection; 