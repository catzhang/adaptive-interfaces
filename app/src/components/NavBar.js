import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function NavBar(props) {
  const { notes, setNotes } = props;

  const barStyle = {
    display: "flex",
    color: "black",
    backgroundColor: "white",
    justifyContent: "space-between"
  }

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    let created_date = monthNames[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
    let note = { id : notes.length + 1, title, content, created_date, category };
    let copy = [...notes, note];
    console.log(copy);

    setNotes(copy);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={barStyle}>
            <Typography variant="h6">
              NOTES
            </Typography>
            <Button onClick={handleOpen} color="inherit">New Note</Button>
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
}