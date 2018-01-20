import React, { Component } from 'react';


class ProjectItem extends Component {
  deleteProject(id){
   this.props.onDelete(id);
  }


  render() {
    var liStyles = {
       listStyleType: 'none',
       fontFamily: 'times'

    };

    var outputStyles = {
       display: 'inline',
       float: 'left',
       width: '80%',
       backgroundColor: '#3399ff',
       padding: '12px 0px 12px 15px',
       margin: '2px',
       boxShadow: '2px 2px 2px',
       fontSize: '15px'

    };

    var buttonStyles = {
       fontSize: '12px',
       fontWeight: '900',
       backgroundColor: '#4CAF50',
       borderRadius: '10px',
       width: "12%",
       padding: '12px',
       boxShadow: '3px 2px 3px',
       margin: '2px'
    };

  /*  var imgStyles = {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    } */
    return (

      <li style ={liStyles} className="Project">
        <div style={outputStyles}><strong>{this.props.project.title}</strong>:  {this.props.project.category}</div>
        <button style ={buttonStyles} onClick={this.deleteProject.bind(this, this.props.project.id)}>DEL</button>
      </li>
    );
  }
}


export default ProjectItem;
