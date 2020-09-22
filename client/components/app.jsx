import React from 'react';
import PageTitle from './page-title';
import GradesTable from './grades-table';
import AverageGrade from './average-grade';
import GradeForm from './add-grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.calculateAverageGrade = this.calculateAverageGrade.bind(this);
    this.addEntry = this.addEntry.bind(this);
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
    }
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <header className="col pt-3 d-flex justify-content-between align-items-center">
            <PageTitle text="Student Grade Table" />
            <AverageGrade average={this.calculateAverageGrade()}/>

          </header>
        </div>
        <div className='row'>
          <main className="col-12 d-flex">
            <GradesTable grades={this.state.grades} />
            <GradeForm onSubmit={this.addEntry}/>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
