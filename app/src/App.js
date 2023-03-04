import * as React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import DemographicForm from './components/DemographicForm';

function App() {
  return (
    <div className="App">
      <Router>
          <DemographicForm />
          {/* <Routes> */}
            {/* <Route path="/">
              
            </Route> */}
          {/* </Routes> */}
      </Router>
    </div>
  );
}

export default App;
