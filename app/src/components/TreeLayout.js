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
import { sortByDescendingTime } from '../utils/utils';



export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const { notes, complexity, color, gender } = props;

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
    
    let AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
      />
    ))(({ theme }) => ({
      backgroundColor: 'lightgray',
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
    }));

    const workColor = "#FFE55E";
    const personalColor = "#FE7070";

    
      const AccordionSummaryWork = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor: workColor,
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          marginLeft: theme.spacing(1),
        },
      }));

      const AccordionSummaryPersonal = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor: personalColor,
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

    const workNotes = notes?.filter(note => note.category === "Work").sort(sortByDescendingTime);
    const personalNotes = notes?.filter(note => note.category === "Personal").sort(sortByDescendingTime);

    const [selectedNote, setSelectedNote] = React.useState(workNotes[0]);

    if (color === "Medium" || color === "High") {
      return (
          <div style={layoutStyle}>
              <div style={{width: 200}}>
                  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                      <AccordionSummaryWork aria-controls="panel1d-content" id="panel1d-header">
                      <Typography style={{ textTransform: 'uppercase' }}>Work</Typography>
                      </AccordionSummaryWork>
                      <AccordionDetails>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                              {workNotes.map((note, index) => (
                                  <Button size="small" key={index} onClick={() => setSelectedNote(note)}>{note.title}</Button>
                              ))}
                          </div>
                      </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                      <AccordionSummaryPersonal aria-controls="panel2d-content" id="panel2d-header">
                      <Typography style={{ textTransform: 'uppercase' }}>Personal</Typography>
                      </AccordionSummaryPersonal>
                      <AccordionDetails>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                              {personalNotes.map((note, index) => (
                                  <Button size="small" key={index} onClick={() => setSelectedNote(note)}>{note.title}</Button>
                              ))}
                          </div>
                      </AccordionDetails>
                  </Accordion>
              </div>
              <TreeCard key={selectedNote.id} 
                          note={selectedNote}
                          complexity={complexity}
                          color={color}
                          gender={gender}/>
          </div>
      );
    } else {
      return (
        <div style={layoutStyle}>
            <div style={{width: 200}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography style={{ textTransform: 'uppercase' }}>Work</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {workNotes.map((note, index) => (
                                <Button size="small" key={index} onClick={() => setSelectedNote(note)}>{note.title}</Button>
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
                            {personalNotes.map((note, index) => (
                                <Button size="small" key={index} onClick={() => setSelectedNote(note)}>{note.title}</Button>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <TreeCard key={selectedNote.id} 
                        note={selectedNote}
                        complexity={complexity}
                        color={color}
                        gender={gender}/>
        </div>
    );
    }
}