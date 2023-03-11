import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { formatDate } from '../utils/utils';

export default function TreeCard(props) {
  // don't need ID now - ID will be needed when we create list of cards with map function
  const { title, content, created_date, last_edit, category } = props.note; // when rendering each card in map function, include the prop `note={note}`
  const { complexity, color, gender } = props;
  const created_date_formatted = formatDate(created_date);

  let cardStyle = {
    position: "relative",
    marginLeft: '5%',
    width: "20%",
    backgroundColor: "#F1EEEC",
    textAlign: "left",
    height: 700
  }

  if (gender === 'Male') {
    cardStyle.backgroundColor = '#F0F0F0';
  } else if (gender === 'Nonbinary') {
    cardStyle.backgroundColor = '#F1F0ED';
  }

  let cardCategoryLabelWork = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px',
    width: '80px',
    height: '30px',
    backgroundColor: '#C8C8C8',
    borderRadius: '15px',
    textAlign: 'center',
    position: 'absolute',
    right: '50px'
  }

  let cardCategoryLabelPersonal = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px',
    width: '80px',
    height: '30px',
    backgroundColor: '#C8C8C8',
    borderRadius: '15px',
    textAlign: 'center',
    position: 'absolute',
    right: '50px'
  }

    let workColor = "#FFE55E";
    let personalColor = "#FE7070";

    if (gender === 'Female') {
        personalColor = '#B0C3E1';
        workColor = '#B4D7E5';
    } else if (gender === 'Nonbinary') {
        personalColor = '#E89494';
        workColor = '#FAE888';
    }

  if (color === "Medium" || color === "High") {
    cardCategoryLabelWork.backgroundColor = workColor;
    cardCategoryLabelPersonal.backgroundColor = personalColor
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
    cardStyle.width = 1100;
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
    if (category === "Work") {
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
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{marginLeft:'2%', marginTop: 'auto'}}>
                {last_edit}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" style={cardCategoryLabelWork}>
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
      )
    } else if (category === "Personal") {
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
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{marginLeft:'2%', marginTop: 'auto'}}>
                {last_edit}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" style={cardCategoryLabelPersonal}>
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
      )
    }
    
  }
}
