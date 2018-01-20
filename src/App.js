import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import CurrentDate from './Components/CurrentDate';
// import ProjectItemContainer from '../Containers/ProjectItemContainer';
import './App.css';

class App extends Component {
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }



  render() {
    var headerStyle = {
      fontFamily: 'Times',
      textAlign: 'center',
      textDecoration: 'overline',
      margin: '0',
      fontSize: '40px',
      paddingTop: '10px',
      textShadow: '-1px 0 #ff4d4d, 0 1px #ff4d4d, 1px 0 #ff4d4d, 0 -1px #ff4d4d',

    };

    var appStyle = {
      borderRadius: '45px',
      backgroundColor: ' #b3ffff',
      display: 'inline-block',
      border: '3px solid #800000',
      padding: '15px 15px 35px 15px'

    };

    return (

      <div className="App" style={appStyle}>
        <CurrentDate date={new Date()} />
        <h1 style={headerStyle}> To-Do Coding Projects </h1>
        <br />
        <AddProject />
        <Projects />
      </div>


    );
  }
}

export default App;
