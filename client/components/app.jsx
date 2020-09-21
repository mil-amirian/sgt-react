import React from 'react';
import PageTitle from './page-title';
import GradesTable from './grades-table';
import AverageGrade from './average-grade';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
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

  render() {
    return (
      <div className="container">
        <div className='row'>
          <header className="col pt-3 d-flex justify-content-between align-items-center">
            <PageTitle text="Student Grade Table" />
            <AverageGrade average={this.state.grades}/>

          </header>
        </div>
        <div className='row'>
          <main className="col">
            <GradesTable grades={this.state.grades}/>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
