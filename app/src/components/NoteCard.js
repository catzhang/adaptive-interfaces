import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function NoteCard(props) {
  // don't need ID now - ID will be needed when we create list of cards with map function
  const { title, content, created_date, category } = props.note; // when rendering each card in map function, include the prop `note={note}`
  const complexity = props.complexity;

  let cardStyle = {
    position: "relative",
    margin: "20px 0px",
    width: "20%",
    backgroundColor: "#F0F0F0",
    textAlign: "left",
    height: "300px"
  }

  let cardActionsStyle = {
    position: "absolute",
    bottom: "20px",
    right: "20px"
  }

  if (complexity === "Low") {
    cardStyle.width = "10%";
    cardStyle.height = "300px";
  } else if (complexity === "Medium") {
    cardStyle.width = "20%";
    cardStyle.height = "350px";
  } else if (complexity === "High") {
    cardStyle.width = "25%";
    cardStyle.height = "370px";
  }
  
  if (complexity === "Low") {
    return (
      <Card sx={{ minWidth: 250 }} style={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {content}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Edit</Button>
        </CardActions> */}
      </Card>
    );
  } else if (complexity === "Medium") {
    return (
      <Card sx={{ minWidth: 250 }} style={cardStyle}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {created_date}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {content}
          </Typography>
        </CardContent>
        <CardActions style={cardActionsStyle}>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card sx={{ minWidth: 250 }} style={cardStyle}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {created_date}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2">
            {content}
          </Typography>
        </CardContent>
        <CardActions style={cardActionsStyle}>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
  );
  }
}
