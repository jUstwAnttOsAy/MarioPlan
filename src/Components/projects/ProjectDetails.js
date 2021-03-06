import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { removeProject } from "../../store/actions/projectActions";

const ProjectDetails = (props) => {
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/signin"></Redirect>;

  const handleRemoveProject = (projectId) => {
    console.log(projectId);
    props.removeProject(projectId);
    props.history.push("/");
  };

  return project ? (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">{project.title}</div>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>
            Posted by {project.authorFirstName} {project.authorLastName}
          </div>
          <div>
            {project.createAt
              ? moment(project.createAt.toDate()).calendar()
              : null}
          </div>
          <button
            onClick={() => {
              handleRemoveProject(props.projectId);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container center">
      <p>is Loading...</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    auth: state.firebase.auth,
    project: project,
    projectId: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProject: (projectId) => dispatch(removeProject(projectId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
