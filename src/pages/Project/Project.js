import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectConcusion from "../ProjectColcusion/ProjectConcusion";
import ProjectComment from "../ProjectComment/ProjectComment";
import "./Project.css";
const Project = () => {
  const { id } = useParams();

  const { error, document } = useDocument("projects", id);

  //check error
  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!document) {
    return <div className="loading"> LOADING...</div>;
  }
  return (
    <div className="project-details">
      <ProjectConcusion project={document} />
      <ProjectComment project={document}/>
    </div>
  );
};

export default Project;
