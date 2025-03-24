import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { FormData, countries } from '../types';

interface CountrySelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CountrySelection: React.FC<CountrySelectionProps> = ({ formData, setFormData }) => {
  const handleCountryChange = (values: (string | number)[]) => {
    const selectedCountries = values as string[];
    setFormData({ ...formData, countries: selectedCountries });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Step 2: Geographic Focus</Heading>
      <Text mb={4}>Select the country or countries of interest:</Text>
      <Box maxH="300px" overflowY="auto" p={2}>
        <CheckboxGroup 
          colorScheme="blue"
          onChange={handleCountryChange}
          value={formData.countries}
        >
          <Flex direction="column" gap={2}>
            {countries.map((country) => (
              <Checkbox key={country} value={country}>
                {country}
              </Checkbox>
            ))}
          </Flex>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default CountrySelection; 