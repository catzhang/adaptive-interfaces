import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DemographicForm from './components/DemographicForm';
import ResultPage from './components/ResultPage';


function App() {

  // --------------- TEMPORARY LOCATION OF NOTES STATES + ENUMS ---------------------------------------------
  const [notes, setNotes] = React.useState([
    {
      id: 0, // TODO: field must be unique
      title: "Personal 3/1/2023",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: new Date(2023, 2, 1),
      last_edit: '01:49 AM',
      category: "Personal"
    },
    {
      id: 1, // TODO: field must be unique
      title: "Work 3/2/2023",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: new Date(2023, 2, 2),
      last_edit: '11:31 AM',
      category: "Work"
    },
    {
      id: 2, // TODO: field must be unique
      title: "Personal 3/2/2023",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: new Date(2023, 2, 2),
      last_edit: '11:10 PM',
      category: "Personal"
    },
    {
      id: 3, // TODO: field must be unique
      title: "Work 3/3/2023",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: new Date(2023, 2, 3),
      last_edit: '12:57 AM',
      category: "Work"
    },
  ]);

  // --------------- END -------------------------------------------------------------------------------------

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<DemographicForm />} />
          <Route exact path="/result" element={<ResultPage notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
