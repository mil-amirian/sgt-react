import React from 'react';
import PageTitle from './page-title';
import GradesTable from './grades-table';

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
      <div className="container col-sm-12 col-lg-8">
        <header className="col pt-3">
          <PageTitle text="Student Grade Table"/>
        </header>
        <main>
          <GradesTable grades={this.state.grades}/>
        </main>
      </div>
    );
  }
}

export default App;
