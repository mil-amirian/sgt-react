import React from 'react';
import PageTitle from './page-title';
import GradesTable from './grades-table';
import AverageGrade from './average-grade';
import GradeForm from './add-grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      editing: null
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.calculateAverageGrade = this.calculateAverageGrade.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grade => {
        this.setState({
          grades: grade
        });
      });
  }

  addEntry(entry) {

    if (!entry.id) {
      const postOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: entry.id,
          name: entry.name,
          course: entry.course,
          grade: parseInt(entry.grade)
        })
      };
      fetch('/api/grades', postOptions)
        .then(res => res.json())
        .then(addedRecord => {
          this.setState(state => ({
            grades: this.state.grades.concat(addedRecord)
          }));
        });
    } else {
      for (let i = 0; i < this.state.grades.length; i++) {
        if (this.state.grades[i].id === entry.id) {
          const patchOptions = {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              name: entry.name,
              course: entry.course,
              grade: parseInt(entry.grade)
            })
          };
          fetch(`/api/grades/${entry.id}`, patchOptions)
            .then(res => res.json())
            .then(updatedEntry => {
              const updateGrades = this.state.grades.map(grade => grade);
              updateGrades.splice(i, 1, updatedEntry);
              this.setState({
                grades: updateGrades
              });
            });
        }
      }
    }

  }

  deleteEntry(entry) {
    const gradesPlaceholder = this.state.grades.slice();
    let indexForDelete;
    for (let i = 0; i < gradesPlaceholder.length; i++) {
      if (gradesPlaceholder[i].id === entry) {
        indexForDelete = i;
      }
    }
    gradesPlaceholder.splice(indexForDelete, 1);

    const deleteOptions = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    };
    fetch(`/api/grades/${entry}`, deleteOptions)
      .then(res => res.json())
      .then(deletedGrade => {
        this.setState(state => ({
          grades: gradesPlaceholder
        }));
      });
  }

  updateEntry(entry) {
    this.setState({
      editing: entry
    });
  }

  calculateAverageGrade() {
    let totalSumOfGrades = 0;
    let averageGrade = 0;
    const gradesLength = this.state.grades.length;
    if (gradesLength) {
      for (let i = 0; i < gradesLength; i++) {
        totalSumOfGrades += this.state.grades[i].grade;
      }
      averageGrade = Math.floor(totalSumOfGrades / gradesLength);
      return averageGrade;
    } else {
      return 'N/A';
    }
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <header className="col pt-3 pb-3 d-lg-flex align-items-center">
            <PageTitle text="Student Grade Table" />
            <AverageGrade average={this.calculateAverageGrade()}/>
          </header>
        </div>
        <div className='row'>
          <main className="col d-lg-flex">
            <GradesTable grades={this.state.grades} deleteEntry={this.deleteEntry} updateEntry={this.updateEntry}/>
            <GradeForm onSubmit={this.addEntry} editing={this.state.editing}/>
          </main>
        </div>
      </div>

    );
  }
}

export default App;
