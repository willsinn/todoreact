import { connect } from 'react-redux';
import Projects from '../Components/Projects';


const mapStateToProps = (state) => {
    return {

    }
};

const ProjectsContainer = connect(mapStateToProps)(Projects);
export default ProjectsContainer;
