import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TreeCard from './TreeCard';
import Button from '@mui/material/Button';

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
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
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

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const {notes, complexity} = props;

    let layoutStyle = {
        width: 1160, 
        height: 400, 
        margin: 'auto', 
        marginTop: '3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // border: '1px solid black'
    }

    if (complexity === "Medium") {
        layoutStyle.width = 1500;
        layoutStyle.height = 500;
    } else if (complexity === "High") {
        layoutStyle.width = 1540;
        layoutStyle.height = 500;
    }

    // const selectedNote = notes[0];
    const [selectedNote, setSelectedNote] = React.useState(notes[0]);

    return (
        <div style={layoutStyle}>
            <div style={{width: 200}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography style={{ textTransform: 'uppercase' }}>Work</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {notes?.map((note, index) => (
                                <Button size="small" key={index} onClick={() => setSelectedNote(notes[index])}>{note.title}</Button>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography style={{ textTransform: 'uppercase' }}>Personal</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {notes?.map((note, index) => (
                                <Button size="small" key={index} onClick={() => setSelectedNote(notes[index])}>{note.title}</Button>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <TreeCard key={selectedNote.id} 
                        note={selectedNote}
                        complexity={complexity}/>
        </div>
    );
}