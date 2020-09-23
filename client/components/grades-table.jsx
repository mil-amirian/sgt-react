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
      <td>
        <button type="button" className="btn btn-warning" onClick={() => props.update(grade)}>Edit</button>
        <button type="button" className="btn btn-danger ml-1" onClick={() => props.deleteEntry(grade.id)}>Delete</button>
      </td>
    </tr>
  );
}

function GradesTable(props) {
  return (
    <table className="col-lg-8 col-sm-12 table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        { props.grades.length < 1
          ? <tr>
            <td colSpan="4">No Grades Recorded
            </td>
          </tr>
          : props.grades.map(grade => {
            return (
              <EachGrade
                key={grade.id}
                grade={grade}
                deleteEntry={props.deleteEntry}
                update={props.updateEntry}
              />
            );
          }

          )

        }
      </tbody>
    </table>
  );
}

export default GradesTable;
