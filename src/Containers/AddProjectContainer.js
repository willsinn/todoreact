import AddProject from '../Components/AddProject';
import { connect } from 'react-redux';

class AddProject extends Component {
  render() {
      <button onClick={this.props.submitProjectAction}>
        Submit
      </button>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // projectItem: state.store['project_1']
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickAdd: () => {
      dispatch(addNewProject(newProject));
    },
    submitProjectAction: (projectInformation) => {
      dispatch(submitProjectAction(projectInformation))
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProject);



















// Actions File
function submitProjectAction(projectInformation) {
  return {
    type: 'SUBMIT_PROJECT_TODO',
    projectInformation: projectInformation
  }
}
















// store
switch(action.type) {
  case 'SUBMIT_PROJECT_TODO':
    state.projects = projectInformation;
    return state;
  case 'DELETE_TODO':
    state.projects = '';
    return state;

}
