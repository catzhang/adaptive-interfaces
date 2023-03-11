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
  console.log(color);
  const hierarchy = calculateHierarchy(state.country); 

  // UNCOMMENT BELOW LINES, COMMENT ABOVE LINES TO HARD CODE
  // const complexity = "High";
  // const hierarchy = "Mixed";

  const { setComplexity, setHierarchy } = props;

  React.useEffect(() => {
    setComplexity(complexity);
    setHierarchy(hierarchy);
  }, []);

  const { notes } = props;

  let component = <FlatLayout notes={notes} complexity={complexity} color={color}/>; // flat

  if (hierarchy === "Mixed") {
    component = <MixedLayout notes={notes} complexity={complexity} color={color}/>;
  } else if (hierarchy === "Tree") {
    component = <TreeLayout notes={notes} complexity={complexity} color={color}/>;
  }

  return (
    component
  );
}

export default ResultPage;
