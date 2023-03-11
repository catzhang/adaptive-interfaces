import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CardsRow from './CardsRow';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(225, 225, 225, 0.5)",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const workColor = "#FFE55E";
const personalColor = "#FE7070";

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  const {notes, complexity, color, gender} = props;

    let layoutStyle = {
        width: 1160, 
        height: 400, 
        margin: 'auto', 
        marginTop: '5%',
    }

    let workLabel = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '15px',
      width: '90px',
      height: '35px',
      backgroundColor: workColor,
      borderRadius: '15px',
      textAlign: 'center',
    }

    let personalLabel = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '15px',
      width: '130px',
      height: '35px',
      backgroundColor: personalColor,
      borderRadius: '15px',
      textAlign: 'center',
    }

    if (complexity === "Medium") {
        layoutStyle.width = 1500;
        layoutStyle.height = 500;
    } else if (complexity === "High") {
        layoutStyle.width = 1540;
        layoutStyle.height = 500;
    }

    if (color == "Low") {
      return (
        <div style={layoutStyle}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography style={{ textTransform: 'uppercase' }}>Work</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CardsRow notes={notes} complexity={complexity} color={color} colorCode={workColor} category="Work" gender={gender}/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography style={{ textTransform: 'uppercase' }}>Personal</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CardsRow notes={notes} complexity={complexity} color={color} colorCode={personalColor} category="Personal" gender={gender}/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
    } else {
      return (
          <div style={layoutStyle}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <div style={workLabel}>
                    <Typography style={{ textTransform: 'uppercase' }}>Work</Typography>
                  </div>
                  </AccordionSummary>
                  <AccordionDetails>
                      <CardsRow notes={notes} complexity={complexity} color={color} colorCode={workColor} category="Work" gender={gender}/>
                  </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <div style={personalLabel}>
                  <Typography style={{ textTransform: 'uppercase' }}>Personal</Typography>
                  </div>
                  </AccordionSummary>
                  <AccordionDetails>
                      <CardsRow notes={notes} complexity={complexity} color={color} colorCode={personalColor} category="Personal" gender={gender}/>
                  </AccordionDetails>
              </Accordion>
          </div>
      );
    }
}