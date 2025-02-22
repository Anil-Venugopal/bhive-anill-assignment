import { Box, Typography, useTheme } from '@mui/material';
import forwardIcon from '../../assets/forward-icon.svg';
import { useMemo } from 'react';

export interface BookPassButtonProps {
  price?: number;
  noOfDays: number;
  discount?: number;
}

const BookPassButton: React.FC<BookPassButtonProps> = ({
  noOfDays = 1,
  price,
  discount,
}) => {
  const theme = useTheme();

  let secondaryButtonColors = {
    buttonBackground: theme.palette.secondary.light,
    buttonBorder: theme.palette.secondary.main,
    titleText: '#65624C',
    passPrice: '#65624C',
    passPriceUnit: '#65624C',
    infoBackground: '#263238',
    infoText: '#FFFDF7',
  };

  let primaryButtonColors = {
    buttonBackground: theme.palette.primary.light,
    buttonBorder: '#FFC422',
    titleText: '#514D2D',
    passPrice: '#65624C',
    passPriceUnit: '#65624C',
    infoBackground: '#263238',
    infoText: '#FFFDF7',
  };

  let colors = noOfDays > 1 ? primaryButtonColors : secondaryButtonColors;

  let isBulkPass = noOfDays > 1;

  const finalPrice = useMemo(() => {
    let priceCummulative = (price ?? 0) * noOfDays;
    return priceCummulative - (priceCummulative * (discount ?? 0)) / 100;
  }, [price, discount, noOfDays]);

  return (
    <Box
      component="button"
      sx={{
        backgroundColor: colors.buttonBackground,
        position: 'relative',
        border: `1px solid ${colors.buttonBorder}`,
        padding: '1.2rem 1rem',
        borderRadius: '8px',
        fontSize: '1.2rem',
        fontWeight: 600,
        cursor: 'pointer',
        textAlign: 'start',
        width: '100%',
        '&:after': {
          content: '""',
          position: 'absolute',
          right: '0.8rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '2.1rem',
          height: '1.2rem',
          backgroundImage: `url(${forwardIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        },
        //hover effect for button for shadow
        '&:hover': {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '1.4rem',
          fontWeight: 500,
          color: colors.titleText,
          lineHeight: '1.2',
        }}
      >
        {isBulkPass ? `Bulk Pass` : 'Day Pass'}
      </Typography>
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 600,
          color: colors.passPrice,
          lineHeight: '1.2',
        }}
      >
        ₹{finalPrice}
        <Typography
          component="span"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: '1.2',
          }}
        >
          {isBulkPass ? `/ ${noOfDays} Days` : '/ Day'}
        </Typography>
      </Typography>
      {discount && (
        <Box
          sx={{
            height: '1.8rem',
            backgroundColor: colors.infoBackground,
            borderRadius: '3px',
            display: 'inline-block',
            padding: '0rem 0.6rem',
            position: 'absolute',
            top: '0.1rem',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
              color: colors.infoText,
            }}
          >
            {discount}% Discount
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BookPassButton;
