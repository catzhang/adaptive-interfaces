import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DemographicForm from './components/DemographicForm';
import ResultPage from './components/ResultPage';

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
        <Routes>
          <Route exact path="/" element={<DemographicForm />} />
          <Route exact path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
