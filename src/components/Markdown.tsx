import ReactMarkdown from 'markdown-to-jsx';
import { Box, Link, Typography } from '@mui/material';

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true, align: "justify" },
    },
    a: { 
      component: (props: any) => (
        <Link underline="hover" target="_blank" rel="noopener noreferrer" {...props}/>
      ),
    },
    li: {
      component: (props: any) => (
        <Box component="li" sx={{ mt: 1 }}>
          <Typography component="span" {...props} />
        </Box>
      ),
    },
  },
};

export default function Markdown(props: any) {
  return (
    <ReactMarkdown options={options} {...props} />
  );
}

