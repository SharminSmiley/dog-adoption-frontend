import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    description: `“Saving one dog will not change the world, but surely for that one dog, the world will change forever.”`,
    backgroundImage: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1280&h=720&fit=crop&auto=format&ixlib=react-10.0.3&',
  },
  {
    description: '“Money can buy a fine dog, but only love can make him wag his tail.” .',
    backgroundImage: 'https://images.unsplash.com/photo-1601758176175-45914394491c?w=1280&h=720&fit=crop&auto=format&ixlib=react-10.0.3&',
  },
  {
    description: `“Dogs have a way of finding the people who need them, and filling the emptiness we didn’t ever know we had.”.`,
    backgroundImage: 'https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?w=1280&h=720&fit=crop&auto=format&ixlib=react-10.0.3&',
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full height of the viewport
        width: '100vw', // Full width of the viewport
        backgroundImage: `url(${steps[activeStep].backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: theme.spacing(0),
        position: 'relative', // Ensure position is relative for absolute positioning of buttons
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: theme.spacing(3),
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px',
          maxWidth: '80%',
          margin: 'auto',
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          {steps[activeStep].description}
        </Typography>
      </Box>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              position: 'absolute',
              bottom: theme.spacing(4),
              right: theme.spacing(2),
              color: '#fff',
            }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              position: 'absolute',
              bottom: theme.spacing(4),
              left: theme.spacing(2),
              color: '#fff',
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
