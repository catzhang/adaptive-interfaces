import * as React from 'react';
import { useLocation } from 'react-router-dom';
import FlatLayout from '../FlatLayout';
import MixedLayout from '../MixedLayout';
import TreeLayout from '../TreeLayout';
import { calculateColorBucket, calculateComplexityBucket, calculateHierarchy } from '../../utils/DemographicCalculations';

function ResultPage(props) {
  const { state } = useLocation();
  console.log(state);
  const color = calculateColorBucket(state.age, state.country);
  const complexity = calculateComplexityBucket(state.age, state.country);
  console.log(complexity);
  const hierarchy = calculateHierarchy(state.country); 

  // UNCOMMENT THESE LINES, COMMENT ABOVE LINES TO HARD CODE (IN App.js)
  // const { hierarchy, complexity } = props;
  // console.log(hierarchy, complexity);

  const {notes} = props;

  let component = <FlatLayout notes={notes} complexity={complexity}/>; // flat

  if (hierarchy === "Mixed") {
    component = <MixedLayout notes={notes} complexity={complexity}/>;
  } else if (hierarchy === "Tree") {
    component = <TreeLayout notes={notes} complexity={complexity}/>;
  }

  return (
    component
  );
}

export default ResultPage;
