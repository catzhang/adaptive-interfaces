import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { formatDate } from '../utils/utils';

export default function TreeCard(props) {
  // don't need ID now - ID will be needed when we create list of cards with map function
  const { title, content, created_date, category } = props.note; // when rendering each card in map function, include the prop `note={note}`
  const complexity = props.complexity;
  const created_date_formatted = formatDate(created_date);

  let cardStyle = {
    position: "relative",
    marginLeft: '5%',
    width: "20%",
    backgroundColor: "#F0F0F0",
    textAlign: "left",
    height: 700
  }

  let cardActionsStyle = {
    position: "absolute",
    bottom: "20px",
    right: "20px"
  }

  if (complexity === "Low") {
    cardStyle.width = 700;
  } else if (complexity === "Medium") {
    cardStyle.width = 860;
  } else if (complexity === "High") {
    cardStyle.width = 1300;
    cardStyle.marginLeft = '2%';
  }
  
  if (complexity === "Low") {
    return (
      <Card sx={{ minWidth: 250 }} style={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" style={{marginTop:'2%'}}>
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
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{marginLeft:'2%', marginTop: 'auto'}}>
                {created_date_formatted}
            </Typography>
          </div>
          <Typography variant="body2" style={{marginTop:'2%'}}>
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
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{marginLeft:'2%', marginTop: 'auto'}}>
                {created_date_formatted}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{marginLeft:'2%', marginTop: 'auto', marginBottom: 'auto'}}>
                {category}
            </Typography>
          </div>  
          <Typography variant="body2" style={{marginTop:'2%'}}>
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
