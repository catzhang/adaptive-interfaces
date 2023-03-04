import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Input = styled(MuiInput)`
  width: 42px;
`;

function DemographicForm() {
  const navigate = useNavigate();

  // AGE INPUT STATE AND HOOKS
  const [ageValue, setAgeValue] = React.useState(30);
  const handleAgeSliderChange = (event, newValue) => {
    setAgeValue(newValue);
  };
  const handleAgeInputChange = (event) => {
    setAgeValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleAgeBlur = () => {
    if (ageValue < 18) {
      setAgeValue(18);
    } else if (ageValue > 65) {
      setAgeValue(65);
    }
  };

  // GENDER INPUT STATE AND HOOKS
  const [genderValue, setGenderValue] = React.useState(50);
  const handleGenderSliderChange = (event, newValue) => {
    setGenderValue(newValue);
  };

  // COUNTRY INPUT STATE AND HOOKS
  const [countryValue, setCountryValue] = React.useState('United States of America');
  const handleCountryChange = (event) => {
    setCountryValue(event.target.value);
  };

  const handleSubmit = () => {
    navigate('/result', {
      state: {
        age: ageValue,
        gender: genderValue,
        country: countryValue,
      },
    });
  };

  return (
    <Box sx={{ width: 600, p: 8 }}>
        <div> {/* AGE INPUT SLIDER */}
          <Typography id="input-slider" gutterBottom>
            Age
          </Typography>
          <Grid container spacing={2} alignItems="center" >
            <Grid item xs>
              <Slider
                value={typeof ageValue === 'number' ? ageValue : 18}
                onChange={handleAgeSliderChange}
                aria-labelledby="input-slider"
                step={1}
                min={18}
                max={65}
              />
            </Grid>
            <Grid item>
              <Input
                value={ageValue}
                size="small"
                onChange={handleAgeInputChange}
                onBlur={handleAgeBlur}
                inputProps={{
                  step: 1,
                  min: 18,
                  max: 65,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
          </Grid>
        </div>
        <div> {/* GENDER INPUT SLIDER */}
          <Typography id="input-slider" gutterBottom>
            Gender
          </Typography>
          <Grid container alignItems="center" >
            <Grid item xs>
              <Typography>
                Female
              </Typography>
            </Grid>
            <Grid item xs>
              <Slider
                value={typeof genderValue === 'number' ? genderValue : 0}
                onChange={handleGenderSliderChange}
                aria-labelledby="input-slider"
                step={1}
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs>
              <Typography>
                Male
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div> {/* COUNTRY INPUT SELECTOR */}
          <Typography gutterBottom>
            Culture
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={countryValue}
              label="Country"
              onChange={handleCountryChange}
            >
              <MenuItem value={10}>United States of America</MenuItem>
              <MenuItem value={20}>Canada</MenuItem>
              <MenuItem value={30}>China</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </div>
    </Box>
  );
}

export default DemographicForm;
