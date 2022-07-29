import React from 'react';
import { Box } from '@mui/material';
import BasicLayout from 'about/BasicLayout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const rules = `
  ### Regulamin
`

const RulesView = () => (
  <BasicLayout>
    <Box sx={{ py: 2, px: { xs: 5, md: 20 } }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={rules} />
    </Box>
  </BasicLayout>
);

export default RulesView;
