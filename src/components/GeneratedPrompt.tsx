import React from 'react';
import { Box, Heading, Text, Textarea, Button, Flex } from '@chakra-ui/react';
import { FormData } from '../types';

interface GeneratedPromptProps {
  formData: FormData;
}

const GeneratedPrompt: React.FC<GeneratedPromptProps> = ({ formData }) => {

  // Define the formatList function to format countries and sectors correctly
  const formatList = (items: string[]): string => {
    if (items.length === 1) return items[0];
    return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
  };
  
  const generatePrompt = (): string => {
    const { role, countries, sectors, timeframe, outputFormat, specificQuestion } = formData;
    
    let prompt = `As a ${role}, I require detailed information on ${formatList(sectors)} in ${formatList(countries)} for the ${timeframe}. `;
    prompt += `This information should include key trends, challenges, and relevant data points. `;
    prompt += `Additionally, please include analysis on recent developments, potential future implications, and critical indicators to monitor. `;
    prompt += `Please present the findings in the format of a ${outputFormat.split(':')[0]}, ensuring clarity, conciseness, and actionable insights.`;
  
    
    if (specificQuestion) {
      prompt += ` Specifically, I want to know: ${specificQuestion}`;
    }
    
    // Add current date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    prompt += ` Today is ${formattedDate}.`;
    
    return prompt;
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt());
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb={4}>Step 7: Generated Prompt</Heading>
      <Text mb={4}>
        Your customized prompt for the GANNET Virtual Assistant is ready:
      </Text>
      <Textarea
        value={generatePrompt()}
        readOnly
        minHeight="150px"
        mb={4}
        p={3}
        borderColor="blue.200"
        borderWidth="2px"
        fontSize="md"
      />
      <Flex justifyContent="flex-end">
        <Button colorScheme="blue" onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </Button>
      </Flex>
    </Box>
  );
};

export default GeneratedPrompt; 