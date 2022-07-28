import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
//required modern js formate date
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const ProjectComment = ({ project }) => {
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("projects");
  const [newComment, setNewComment] = useState("");

  const submitComment = async (e) => {
    e.preventDefault();

    //create object with user Comment
    const addComment = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      //genrate user id with coop number
      id: Math.random(),
    };
//r console.log(addComment)
    await updateDocument(project.id, {
      comments: [...project.comments, addComment], // duplicate comment by old comment + newComment
    });
    // Comment and then reply no irror.
    if (!response.error) {
      //set content in textarea is empty
      setNewComment("");
    }
  };
  return (
    <div className="project-comments">
      <h4>Comments</h4>
      {/* error of map */}
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar image={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>

              <div className="comment-date">
                {/* show minute after create content to page ex. content is create ago 21 minute */}
                <p>{formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}</p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>
      <form className="add-comment" onSubmit={submitComment}>
        <label htmlFor="">
          <span>New Comment</span>

          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>

        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
};

export default ProjectComment;
