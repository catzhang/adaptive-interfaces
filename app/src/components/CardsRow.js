import * as React from 'react';
import NoteCard from './NoteCard';


export default function CardsRow(props) {
    const { notes, complexity } = props;

    let leftMargin = '2%';

    if (complexity === "Medium") {
        leftMargin = '4%';
    } else if (complexity === "High") {
        leftMargin = '4%';
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {notes?.map((note) => (
                <div key={note.id} style={{marginLeft: leftMargin}}>
                    <NoteCard 
                        note={note}
                        complexity={complexity}
                        // editNote={editNote} // TODO - add edit function later
                    />
                </div>
            ))}
        </div>
    )
}
