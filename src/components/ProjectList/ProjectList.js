import "./ProjectList.css";
import { Link } from "react-router-dom";
import Avatar from '../Avatar/Avatar'
const ProjectList = ({ docs }) => {
  return (
    <div className="project-list">
      {docs.length === 0 && <p>No Project for Your!</p>}
      {docs.map((doc) => (
	// link to project id exam. project/1
        <Link to={`/project/${doc.id}`} key={doc.id}>
          <h3>{doc.name}</h3>
	  <p>Due By {doc.date.toDate().toDateString()}</p>

	  <div className="assigned-to">
		  <ul>
			  {doc.assignUserList.map(user => (
				  <li key={user.photoURL}>
					  <Avatar image={user.photoURL} />
				  </li>
			  ))}
		  </ul>
	  </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
