import * as React from 'react';
import NoteCard from './NoteCard';
import { sortByDescendingTime } from '../utils/utils';

export default function CardsRow(props) {
    const { notes, complexity, category, color, colorCode, gender } = props;

    const categoryNotes = notes?.filter(note => note.category === category).sort(sortByDescendingTime);
    console.log(gender);

    let space = '2%';

    if (complexity === "Medium") {
        space = '4%';
    } else if (complexity === "High") {
        space = '4%';
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: space, marginLeft: space}}>
            {categoryNotes.map((note) => (
                <NoteCard 
                    key={note.id}
                    note={note}
                    complexity={complexity}
                    color = {color}
                    colorCode = {colorCode}
                    gender={gender}
                    // editNote={editNote} // TODO - add edit function later
                />
            ))}
        </div>
    )
}
