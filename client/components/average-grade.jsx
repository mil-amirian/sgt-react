import React from 'react';

function AverageGrade(props) {
  const averageGrade = props.average;

  return (
    <h3 className="col text-right">Average Grade <span className="badge badge-secondary align-right">{averageGrade}</span></h3>
  );
}

export default AverageGrade;
