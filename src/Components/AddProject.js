import React, { Component } from 'react';
import uuid from 'uuid';
import { addProject } from '../Actions/projects';
import { connect } from 'react-redux';


class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    e.preventDefault(); //prevents reset so value can be pushed
    if(this.refs.title.value === ''){
      alert('Project title is Required!');
    } else {
      this.props.addProject({
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      });
    }

    this.refs.title.value = ''; //resets textbox
  }

  render() {
  /*  var divStyle = {
    }; */
    var inputStyle = {
         width: '65%',
         display: 'inline-block',
         height: '35px',
         padding: '12px 20px',
         boxSizing: 'border-box',
         border: '4px solid #ccc',
         borderRadius: '4px',
         backgroundColor: '#f8f8f8',
         fontSize: '12px',
         resize: 'none'
    };

    var selectStyle = {
         width: '35%',
         display: 'inline-block',
         height: '35px',
         padding: '12px 20px',
         boxSizing: 'border-box',
         border: '4px solid #ccc',
         borderRadius: '4px',
         backgroundColor: '#f8f8f8',
         fontSize: '12px',
         resize: 'none'
    };

    var submitStyle = {
         float: 'right',
         backgroundColor: '#1a53ff',
         border: 'none',
         padding: '10px 20px',
         borderRadius: '4px',
         color: 'white',
         fontSize: '11px',
         margin: '10px'
    };

    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div /*style={divStyle} */>
            <input style ={inputStyle} type="text" ref="title" placeholder="Add Project"/>
            <select style ={selectStyle} ref="category">
              {categoryOptions}
            </select>
          </div>
          <input style ={submitStyle} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (project) => {
      dispatch(addProject(project));
    }
  }
};

export default connect(false, mapDispatchToProps)(AddProject);
