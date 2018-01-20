import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import CurrentDate from './Components/CurrentDate';
// import ProjectItemContainer from '../Containers/ProjectItemContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }


  getProjects(){
    this.setState({projects:[
        {
          id:uuid.v4(),
          title: 'Portfolio Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Calculator App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
   ]});
  }

  componentWillMount(){      //Life Cycle
   this.getProjects();
  }



  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

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
        <CurrentDate date={this.state.date} />
        <h1 style={headerStyle}> To-Do Coding Projects </h1>
        <br />
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>


    );
  }
}

export default App;
