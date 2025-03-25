export interface FormData {
  role: string;
  countries: string[];
  sectors: string[];
  timeframe: string;
  outputFormat: string;
  specificQuestion: string;
}

export const roles = [
  'Humanitarian Analyst',
  'Country Manager/Director',
  'Field Worker',
  'Program Officer',
  'Donor Representative',
  'Non-Humanitarian Professional'
];

export const sectors = [
  'Food Security',
  'Health',
  'Water, Sanitation and Hygiene (WASH)',
  'Protection',
  'Education',
  'Shelter',
  'Nutrition',
  'Logistics',
  'Other'
];

export const timeframes = [
  'Past 24 hours',
  'Past week',
  'Past month',
  'Past 3 months',
  'Past year',
  'Historical context (more than 1 year)'
];

export const outputFormats = [
  'Executive Summary: 3-5 concise paragraphs highlighting the most critical points',
  'Bullet Points: Categorized list of clear, actionable items for quick scanning',
  'Tabular Format: Organized data with clear headers for easy comparison of metrics (Coming Soon)',
  'Detailed Analysis: Comprehensive report with sections, subsections, and supporting evidence'
];

export const countries = [
  'Global',
  'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia', 'Australia', 
  'Azerbaijan', 'Bangladesh', 'Belarus', 'Benin', 'Bolivia', 'Bosnia and Herzegovina', 
  'Botswana', 'Brazil', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 
  'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Democratic Republic of the Congo', 
  'Denmark', 'Djibouti', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 
  'Eritrea', 'Estonia', 'Ethiopia', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 
  'Germany', 'Ghana', 'Greece', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Haiti', 
  'Honduras', 'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 
  'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 
  'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 
  'Libya', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 
  'Mali', 'Malta', 'Mauritania', 'Mexico', 'Moldova', 'Mongolia', 'Montenegro', 
  'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 
  'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 
  'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 
  'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 
  'Senegal', 'Serbia', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 
  'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 
  'Sudan', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 
  'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 
  'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 
  'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen', 
  'Zambia', 'Zimbabwe'
]; 