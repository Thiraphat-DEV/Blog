import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
//required projectFilter
import ProjectFilter from "../ProjectFilter/ProjectFilter";
import React from "react";
import ProjectList from "../../components/ProjectList/ProjectList";

//destruck user from useAuthContext
import { useAuthContext } from "../../hooks/useAuthContext";

//required hook for getState
import { useState } from "react";
const Dashboard = () => {
  //fetch data from folder `projects` of firestoreDatabase
  const { documents, error } = useCollection("projects");

  // user
  const { user } = useAuthContext();
  const [curFilter, setCurFilter] = useState("All");
  //change filter for category
  const changeFilter = (newFilter) => {
    setCurFilter(newFilter);
  };

  const projects = documents ? documents.filter((doc) => {
    //check filter user
    switch (curFilter) {
      case "ALL":
        return true;

      case "MINE":
        //user assigned for success
        let assigned = false;
        doc.assignUserList.forEach((u) => {
          //check user has to firestore by convert for success
          if (user.uid === u.id) {
            assigned = true;
          }
        });
        return assigned;
      // check all component condition
      case "DEVELOPMENT":
      case "DESIGN":
      case "FINANCE":
      case "DEEPLEARNING":
      case "MACHINELEARNING":
      case "FRONTEND":
      case "BACKTEND":
      case "FULLSTACK":
        console.log(doc.category, curFilter);
        return doc.category === curFilter;
      default:
        return true;
    }
  }) : null
  return (
    <div>
      <h2 className="page-title">DashBoardProject</h2>
      {error && <p className="error"> {error}</p>}
      {documents && (
        <ProjectFilter currentFilter={curFilter} changeFilter={changeFilter} />
      )}
      {documents && <ProjectList docs={projects} />}
    </div>
  );
};

export default Dashboard;
