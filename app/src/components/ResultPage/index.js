import * as React from 'react';
import { useLocation } from 'react-router-dom';
import FlatLayout from '../FlatLayout';
import MixedLayout from '../MixedLayout';
import TreeLayout from '../TreeLayout';
import NavBar from '../NavBar';
import { calculateColorBucket, calculateComplexityBucket, calculateHierarchy, calculateGenderBucket } from '../../utils/DemographicCalculations';
import '../../../src/App.css';

function ResultPage(props) {
  const { state } = useLocation();
  console.log(state);
  const color = calculateColorBucket(state.age, state.country);
  const complexity = calculateComplexityBucket(state.age, state.country);
  const hierarchy = calculateHierarchy(state.country); 
  const gender = calculateGenderBucket(state.gender);
  console.log(complexity, hierarchy, gender);

  // UNCOMMENT BELOW LINES, COMMENT ABOVE LINES TO HARD CODE
  // const complexity = "Medium";
  // const hierarchy = "Tree";
  // const color = "High";
  // const gender = "Female";

  const { notes, setNotes } = props;

  let component = <FlatLayout notes={notes} complexity={complexity} color={color} gender={gender}/>; // flat

  if (hierarchy === "Mixed") {
    component = <MixedLayout notes={notes} complexity={complexity} color={color} gender={gender}/>;
  } else if (hierarchy === "Tree") {
    component = <TreeLayout notes={notes} complexity={complexity} color={color} gender={gender}/>;
  }

  let genderBackgroundColor = "inherit";
  if (complexity === "High" && hierarchy !== "Tree") {
    if (gender === 'Male') {
      genderBackgroundColor = "#D9D9D9";
    } else if (gender === "Nonbinary") {
      genderBackgroundColor = "#F1F0ED";
    } else {
      genderBackgroundColor = "#F5F3F2";
    }
  }

  return (
    <div className="ResultPageDiv" style={{backgroundColor: genderBackgroundColor}}>
      <NavBar notes={notes} setNotes={setNotes} complexity={complexity} color={color} gender={gender}/> 
      {component}
    </div>
  );
}

export default ResultPage;
