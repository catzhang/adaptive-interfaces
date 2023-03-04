import * as React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import DemographicForm from './components/DemographicForm';
import NoteCard from './components/NoteCard'; {/* TEMPORARY LOCATION */}

function App() {

  // --------------- TEMPORARY LOCATION OF NOTES STATES + ENUMS ---------------------------------------------
  const [notes, setNotes] = React.useState([
    {
        id: 1, // TODO: field must be unique
        title: "Lorem",
        content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
        created_date: "March 2, 2023", // TODO convert to date-type
        category: "Work"
    },
    {
      id: 2, // TODO: field must be unique
      title: "Ipsum",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: "March 1, 2023", // TODO convert to date-type
      category: "Personal"
    },
  ]);

  const Complexity = "Medium"; // TEMP
  // --------------- END -------------------------------------------------------------------------------------

  return (
    <div className="App">
      <Router>
          <DemographicForm />
          {/* ------------------------------ TEMPORARY LOCATION OF CARDS - TODO: move to notes page ---------------*/}
          <div>
            {notes.map((note) => (
                <NoteCard 
                    key={note.id} 
                    note={note}
                    complexity={Complexity}
                    // editNote={editNote} // TODO - add edit function later
                />
            ))}
          </div>
          {/* ------------------------------ END ------------------------------------------------------------------*/}
          {/* <Routes> */}
            {/* <Route path="/">
              
            </Route> */}
          {/* </Routes> */}
      </Router>
    </div>
  );
}

export default App;
