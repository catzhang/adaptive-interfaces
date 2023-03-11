import * as React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { formatDate } from '../utils/utils';
import icon from './../Add_ring_light.png';

export default function NavBar(props) {
  const { notes, setNotes, complexity, color, gender } = props;
  console.log(complexity, color, gender);

  let barStyle = {
    display: "flex",
    color: "black",
    backgroundColor: "#D4D4D4",
    justifyContent: "space-between"
  }
  
  let barTextColor = 'black';

  if (color === 'High') {
    if (gender === 'Male') { 
      barStyle.backgroundColor = '#3F50B5';
      barTextColor = 'white';
    } else if (gender === 'Nonbinary') {
      barStyle.backgroundColor = '#638CC9';
    } else {
      barStyle.backgroundColor = '#ACC4E8';
    }
  }

  let buttonStyle = {
    backgroundColor: "inherit",
    marginRight: "8px",
  }

  if (color === 'High') {
    if (gender === 'Male') { 
      buttonStyle.backgroundColor = '#10B210';
    } else if (gender === 'Nonbinary') {
      buttonStyle.backgroundColor = '#78C16C';
    } else {
      buttonStyle.backgroundColor = '#B7D8B2';
    }
  }
  

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [category, setCategory] = React.useState('Work');
  const [last_edit, setLastEdit] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const timeNow = (date) => {
    let hr = date.getHours();
    let min = date.getMinutes();
    let am_pm = 'AM'
    if (hr > 12) {
      hr = hr - 12;
      am_pm = 'PM'
    }
    const time = hr + ':' + min + ' ' + am_pm;
    if (min < 10) {
      time = hr + ':' + '0' + min + ' ' + am_pm;
    }
    return time;
  }

  const handleSubmit = () => {
    const created_date = new Date();
    const last_edit = timeNow(created_date);
    let note = { id : notes.length + 1, title, content, created_date, last_edit, category };
    let copy = [...notes, note];
    
    setNotes(copy);
    console.log(notes);
    handleClose();
  }

  let style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#F1EEEC',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };

  if (gender === 'Male') {
    style.backgroundColor = '#F0F0F0';
  } else if (gender === 'Nonbinary') {
    style.backgroundColor = '#F1F0ED';
  }

  if (complexity === 'Low') {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar style={barStyle}>
              <Typography variant="h6" style={{color: barTextColor}}>
                NOTES
              </Typography>
              <Button onClick={handleOpen} color="inherit" style={{color: barTextColor}}><img src={icon} style={buttonStyle}/>New Note</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create new note
            </Typography>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginTop: '4%' }}>Title:
                <input
                  style={{ marginLeft: '2%' }}
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label style={{ marginTop: '4%' }}>Content:
                <textarea
                  style={{ marginTop: '2%' }}
                  rows="5" cols="40"
                  type="text" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </label>
              <label style={{ marginTop: '4%' }}>Category:
                <select style={{ marginLeft: '2%' }} value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
              </label>
            </form>
            
            <Button style={{ marginTop: '6%' }} onClick={handleSubmit} variant="outlined">Submit</Button>
          </Box>
        </Modal>
      </div>
      
    );
  } else if (complexity === 'Medium') {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar style={barStyle}>
              <Typography variant="h6" style={{color: barTextColor}}>
                NOTES
              </Typography>
              <Button onClick={handleOpen} color="inherit" style={{color: barTextColor}}><img src={icon} style={buttonStyle}/>New Note</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create new note
            </Typography>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginTop: '4%' }}>Title:
                <input
                  style={{ marginLeft: '2%' }}
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <Typography gutterBottom style={{ marginTop: '2%' }}>
                Date: {formatDate(new Date())}
              </Typography>
              <label style={{ marginTop: '1%' }}>Content:
                <textarea
                  style={{ marginTop: '2%' }}
                  rows="5" cols="40"
                  type="text" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </label>
              <label style={{ marginTop: '4%' }}>Category:
                <select style={{ marginLeft: '2%' }} value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
              </label>
            </form>
            
            <Button style={{ marginTop: '6%' }} onClick={handleSubmit} variant="outlined">Submit</Button>
          </Box>
        </Modal>
      </div>
      
    );
  } else { // high
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar style={barStyle}>
              <Typography variant="h6" style={{color: barTextColor}}>
                NOTES
              </Typography>
              <Button onClick={handleOpen} color="inherit" style={{color: barTextColor}}><img src={icon} style={buttonStyle}/>New Note</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create new note
            </Typography>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginTop: '4%' }}>Title:
                <input
                  style={{ marginLeft: '2%' }}
                  type="text" 
                  value={title}
                  placeholder='Name your note'
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setLastEdit(timeNow(new Date()));
                  }}
                />
              </label>
              <Typography gutterBottom style={{ marginTop: '2%' }}>
                Date: {formatDate(new Date())}
              </Typography>
              <label style={{ marginTop: '4%' }}>Content:
                <textarea
                  style={{ marginTop: '2%' }}
                  rows="5" cols="40"
                  type="text" 
                  value={content}
                  placeholder='Type your note here'
                  onChange={(e) => {
                    setContent(e.target.value);
                    setLastEdit(timeNow(new Date()));
                  }}
                />
              </label>
              <Typography gutterBottom style={{ marginTop: '2%' }}>
                Last edit: {last_edit}
              </Typography>
              <label style={{ marginTop: '4%' }}>Category:
                <select style={{ marginLeft: '2%' }} value={category} onChange={(e) => {
                  setCategory(e.target.value)
                  setLastEdit(timeNow(new Date()));
                  }}
                >
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
              </label>
            </form>
            
            <Button style={{ marginTop: '6%' }} onClick={handleSubmit} variant="outlined">Submit</Button>
          </Box>
        </Modal>
      </div>
      
    );
  }
}