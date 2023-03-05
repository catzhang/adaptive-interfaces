import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardsRow from './CardsRow';

export default function FlatLayout(props) {
    const { notes, complexity } = props;

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

    if (complexity === "Medium") {
        layoutStyle.width = 1500;
        layoutStyle.height = 500;
    } else if (complexity === "High") {
        layoutStyle.width = 1540;
        layoutStyle.height = 500;
    }

    return (
        <div>
            <div style={{textAlign: 'left', width: layoutStyle.width, margin: 'auto',}}>
                <Typography style={{marginBottom: '1%', marginTop: '2%'}}>Work</Typography>
                <div style={layoutStyle}>
                    <CardsRow notes={notes} complexity={complexity}/>
                </div>
            </div>
            <div style={{textAlign: 'left', width: layoutStyle.width, margin: 'auto', marginBottom: '3%'}}>
                <Typography style={{marginBottom: '1%', marginTop: '2%'}}>Personal</Typography>
                <div style={layoutStyle}>
                    <CardsRow notes={notes} complexity={complexity}/>
                </div>
            </div>
            
        </div>
    )
}
