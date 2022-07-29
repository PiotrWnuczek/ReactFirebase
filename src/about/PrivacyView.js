import React from 'react';
import { Box } from '@mui/material';
import BasicLayout from 'about/BasicLayout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const privacy = `
  ### Polityka Prywatności
`;

const PrivacyView = () => (
  <BasicLayout>
    <Box sx={{ py: 2, px: { xs: 5, md: 20 } }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={privacy} />
    </Box>
  </BasicLayout>
);

export default PrivacyView;
