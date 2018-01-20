import { connect } from 'react-redux';
import ProjectItem from '../Components/ProjectItem';


const ProjectItemContainer = connect()(ProjectItem);//no action so no dispatch
export default ProjectItemContainer;
