import React from 'react';

function AverageGrade(props) {
  let totalSumOfGrades = 0;
  let averageGrade = 0;
  const grades = props.average;
  for (let i = 0; i < grades.length; i++) {
    totalSumOfGrades += grades[i].grade;
  }
  if (grades.length) {
    averageGrade = Math.floor(totalSumOfGrades / grades.length);
  }
  return (
    <h3 className="col text-right">Average Grade <span className="badge badge-secondary align-right">{averageGrade}</span></h3>
  );
}

export default AverageGrade;
