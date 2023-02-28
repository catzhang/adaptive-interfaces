import * as React from 'react';
import './App.css';
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

const Input = styled(MuiInput)`
  width: 42px;
`;

function AgeInputSlider() {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 18) {
      setValue(18);
    } else if (value > 65) {
      setValue(65);
    }
  };

  return (
    <>
      <Typography id="input-slider" gutterBottom>
        Age
      </Typography>
      <Grid container spacing={2} alignItems="center" >
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 18}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={1}
            min={18}
            max={65}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
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
    </>
  );
}

function GenderInputSlider() {
  const [value, setValue] = React.useState(50);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
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
    </>
  );
}

function SelectCountry() {
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <Typography gutterBottom>
        Culture
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value={10}>United States of America</MenuItem>
          <MenuItem value={20}>Canada</MenuItem>
          <MenuItem value={30}>China</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Box sx={{ width: 600, p: 8 }}>
        <div>
          <AgeInputSlider />
        </div>
        <div>
          <GenderInputSlider />
        </div>
        <div>
          <SelectCountry />
        </div>
      </Box>
    </div>
  );
}

export default App;
