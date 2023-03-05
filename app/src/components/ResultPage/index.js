import * as React from 'react';
import { useLocation } from 'react-router-dom';
import FlatLayout from '../FlatLayout';
import MixedLayout from '../MixedLayout';

function ResultPage(props) {
  const { state } = useLocation();
  console.log(state);
  const {notes, complexity, layout} = props;

  let component = <FlatLayout notes={notes} complexity={complexity}/>; // flat

  if (layout === "Mixed") {
    component = <MixedLayout notes={notes} complexity={complexity}/>;
  } else if (layout === "Tree") {
    <div/> // TODO
  }

  return (
    component
  );
}

export default ResultPage;
