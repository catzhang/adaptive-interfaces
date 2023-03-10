import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import DemographicForm from './components/DemographicForm';
import ResultPage from './components/ResultPage';


function App() {

  // --------------- TEMPORARY LOCATION OF NOTES STATES + ENUMS ---------------------------------------------
  const [notes, setNotes] = React.useState([
    {
        id: 1, // TODO: field must be unique
        title: "Lorem",
        content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
        created_date: new Date(2023, 2, 2),
        category: "Work"
    },
    {
      id: 2, // TODO: field must be unique
      title: "Ipsum",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: new Date(2023, 2, 1),
      category: "Personal"
    },
    {
      id: 3, // TODO: field must be unique
      title: "Lorem",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: new Date(2023, 2, 2),
      category: "Work"
    },
    {
      id: 4, // TODO: field must be unique
      title: "Ipsum",
      content: "Lorem ipsum dolor sit amet. Et ipsum adipisci ab totam tenetur sit reprehenderit fuga qui harum nesciunt",
      created_date: new Date(2023, 2, 1),
      category: "Personal"
    },
  ]);

  const Complexity = "High"; // TEMP
  const Hierarchy = "Tree"; // TEMP

  // --------------- END -------------------------------------------------------------------------------------

  return (
    <div className="App">
      <NavBar notes={notes} setNotes={setNotes} />
      <Router>
        <Routes>
          <Route exact path="/" element={<DemographicForm />} />
          <Route exact path="/result" element={<ResultPage notes={notes} complexity={Complexity} hierarchy={Hierarchy}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
