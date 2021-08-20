import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const { isAuthenticated } = useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  const commentSection = React.useRef(null);

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, []);

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {isAuthenticated && (
        <PhotoCommentsForm id={props.id} setComments={setComments} />
      )}
    </>
  );
};

export default PhotoComments;