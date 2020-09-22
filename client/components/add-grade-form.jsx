import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const placeholder = event.target.placeholder;
    if (placeholder === 'Name') {
      this.setState({
        name: event.target.value
      });
    } else if (placeholder === 'Course') {
      this.setState({
        course: event.target.value
      });
    } else if (placeholder === 'Grade') {
      this.setState({
        grade: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newEntry = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newEntry);
    this.setState(state => ({
      name: '',
      course: '',
      grade: ''
    }));

  }

  render() {
    const Name = this.state.name;
    const Course = this.state.course;
    const Grade = this.state.grade;

    return (
      <form className="col-4" onSubmit={this.handleSubmit}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>
          </div>
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Name" onChange={this.handleChange} value={Name}/>
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-layout-text-window-reverse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                <path fillRule="evenodd" d="M5 15V4H4v11h1zM.5 4h15V3H.5v1zM13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
              </svg>
            </div>
          </div>
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Course" onChange={this.handleChange} value={Course}/>
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-award" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
            </div>
          </div>
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Grade" onChange={this.handleChange} value={Grade}/>
        </div>
        <div className="form-group row float-right">
          <div className="col">
            <button type="submit" className="btn btn-success">Add Record</button>
            <button type="reset" value="reset" className="btn btn-outline-secondary ml-1">Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

export default GradeForm;
