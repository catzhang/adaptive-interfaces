import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardsRow from './CardsRow';

export default function FlatLayout(props) {
    const { notes, complexity, color, gender } = props;

    let layoutStyle = {
        backgroundColor: 'white', 
        width: 1160, 
        height: 400, 
        border: '1px solid black', 
        borderRadius: '10px', 
        margin: 'auto', 
        display: 'flex',
        alignItems: 'center',
    }

    let categoryWorkLabel = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '15px',
        width: '90px',
        height: '35px',
        backgroundColor: '#C8C8C8',
        borderRadius: '15px 15px 0 0',
        textAlign: 'center',
        marginTop: '30px',
    }

    let categoryPersonalLabel = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '15px',
        width: '90px',
        height: '35px',
        backgroundColor: '#C8C8C8',
        borderRadius: '15px 15px 0 0',
        textAlign: 'center',
        marginTop: '30px',
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
        categoryWorkLabel.backgroundColor = workColor;
        categoryPersonalLabel.backgroundColor =  personalColor;
    }

    if (complexity === "Medium") {
        layoutStyle.width = 1500;
        layoutStyle.height = 500;
    } else if (complexity === "High") {
        layoutStyle.width = 1540;
        layoutStyle.height = 500;
    }

    return (
        <div>
            <div style={{textAlign: 'left', width: layoutStyle.width, margin: 'auto', marginBottom: '4%'}}>
                <div style={categoryWorkLabel}>
                    <Typography>Work</Typography>
                </div>
                <div style={layoutStyle}>
                    <CardsRow notes={notes} complexity={complexity} color={color} colorCode={workColor} category="Work" gender={gender}/>
                </div>
            </div>
            <div style={{textAlign: 'left', width: layoutStyle.width, margin: 'auto', marginBottom: '3%'}}>
                <div style={categoryPersonalLabel}>
                    <Typography>Personal</Typography>
                </div>
                <div style={layoutStyle}>
                    <CardsRow notes={notes} complexity={complexity} color={color} colorCode={personalColor} category="Personal" gender={gender}/>
                </div>
            </div>
            
        </div>
    )
}
