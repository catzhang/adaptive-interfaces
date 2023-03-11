import * as React from 'react';
import NoteCard from './NoteCard';
import { sortByDescendingTime } from '../utils/utils';

export default function CardsRow(props) {
    const { notes, complexity, category, color, colorCode } = props;

    const categoryNotes = notes?.filter(note => note.category === category).sort(sortByDescendingTime);

    let leftMargin = '2%';

    if (complexity === "Medium") {
        leftMargin = '4%';
    } else if (complexity === "High") {
        leftMargin = '4%';
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {categoryNotes.map((note) => (
                <div key={note.id} style={{marginLeft: leftMargin}}>
                    <NoteCard 
                        note={note}
                        complexity={complexity}
                        color = {color}
                        colorCode = {colorCode}
                        // editNote={editNote} // TODO - add edit function later
                    />
                </div>
            ))}
        </div>
    )
}
