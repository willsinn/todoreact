import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { deleteProject } from '../Actions/projects';


class Projects extends Component {
  deleteProject(id){
    this.props.deleteProject(id);
  }


  render() {

    var listHeaderStyle = {
        display: 'inline-block',
        padding: '0px 0px 8px 0px',
        fontFamily: 'times new roman',
        textDecoration: 'underline',
        width: '100%',
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: '900',
        textShadow: '-1px 0 #00e600, 0 1px #00e600, 1px 0 #00e600, 0 -1px #00e600',
        margin: '0'
    };

    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    console.log('projectItems', projectItems);
    return (
      <div className="Projects">
        <h3 style={listHeaderStyle}>Projects in Progress</h3>
        {projectItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    projects: state.todo.projects
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => {
      dispatch(deleteProject(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
