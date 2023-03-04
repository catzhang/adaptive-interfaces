import * as React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
        <h1>We will display the resulting interface on this page</h1>
    </>
  );
}

export default ResultPage;
