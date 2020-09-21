import React from 'react';

function EachGrade(props) {
  const grade = props.grade;
  const idAttr = grade.id;
  const studentName = grade.name;
  const studentGrade = grade.grade;
  const course = grade.course;
  return (
    <tr scope='row' id={idAttr}>
      <td>{studentName}</td>
      <td>{course}</td>
      <td>{studentGrade}</td>
    </tr>
  );

}

function GradesTable(props) {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(grade => {
            return (
              <EachGrade
                key={grade.id}
                grade={grade}
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

export default GradesTable;
