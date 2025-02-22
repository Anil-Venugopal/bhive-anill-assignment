import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#222E34',
        py: '1.4rem',
        px: 0,
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '1.4rem',
          fontWeight: 400,
          color: '#DDDDDD',
          lineHeight: 1.21,
        }}
      >
        <FormattedMessage id="footer.text" />
      </Typography>
    </Box>
  );
};

export default Footer;
