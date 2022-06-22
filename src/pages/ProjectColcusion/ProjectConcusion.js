import Avatar from "../../components/Avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
const ProjectConcusion = ({ project }) => {
  //destruct function deleteDocument from useFirestore customHook
  const { deleteDocument } = useFirestore("projects");

  const history = useHistory()
  const { user } = useAuthContext();


  const handleDelete = (e) => {
    e.preventDefault()
    //delete follow to project id
    deleteDocument(project.id);
    //redirect to homepage
    history.push('/')
  };
  return (
    <div className="project-summary">
      <h2 className="page-title">{project.name}</h2>
      <p className="due-date">
        Project date: {project.date.toDate().toDateString()}
      </p>

      <p className="details">{project.detail}</p>
      <h4>Project Assigned By</h4>
      <div className="assigned-users">
        {project.assignUserList.map((user) => (
          <div key={user.id}>
            <Avatar image={user.photoURL} />
          </div>
        ))}
      </div>

      {user.uid === project.id && (
        <button className="btn" onClick={handleDelete}>
          Mask as Complete
        </button>
      )}
    </div>
  );
};

export default ProjectConcusion;
