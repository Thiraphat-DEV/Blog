import "./Create.css";
import Select from "react-select";
import { useState, useEffect } from "react";
//destruc user from useAuthContext
import { useAuthContext } from "../../hooks/useAuthContext";
// use timestamp from firebase
import { timestamp } from "../../firebase/config";
//required  useCollection with map user for assignuser
import { useCollection } from "../../hooks/useCollection";
//required useFirestore with get createProjectByUser to firestore
import {useFirestore} from '../../hooks/useFirestore'
//required useHistory for replace to homepage
import { useHistory } from "react-router-dom";
const Create = () => {
  const history = useHistory()
  const {addDocument, response} = useFirestore('projects') //folder ex. `projects` up to you
  //destruct function from useCollection
  const { documents } = useCollection("users");
  const { user } = useAuthContext();
  //should be duplicate from user document
  const [users, setUser] = useState([]);
  //form fields
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignfromuser, setAssignfromuser] = useState([]);
  //create catch formError
  const [formError, setFormError] = useState(null);

  //create category for select option
  const categories = [
    { value: "DEVELOPMENT", label: "DEVELOPMENT" },
    { value: "DESIGN", label: "DESIGN" },
    { value: "FINANCE", label: "FINANCE" },
    { value: "DEEPLEARNING", label: "DEEPLEARNING" },
    { value: "MACHINELEANRING", label: "MACHINELEARNING" },
    { value: "FRONTEND", label: "FRONTEND" },
    { value: "BACKEND", label: "BACKEND" },
    { value: "FULLSTACK", label: "FULLSTACK" },
  ];
  const submitProject = async(e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please Select Category!!!");
      return;
    }

    if (assignfromuser.length < 1) {
      setFormError("Please Select user least 1 user");
      return;
    }
    //destruct same value to newArray and show user who this project
    const assignUserList = assignfromuser.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id,
      };
    });

    // display by user  create project
    const createBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    // all detail to projet variable
    const projectByUser = {
      name,
      detail,
      category: category.value,
      date: timestamp.fromDate(new Date(date)),
      comments: [],
      createBy,
      assignUserList,
    };
    //add projectByUser to fireStore as folder projects
   await addDocument(projectByUser)
    // addDocument successed and go to homepage
   if(!response.error) {
      history.push('/') // go back to homepage
   }
  };

  // redering function for useEffect
  useEffect(() => {
    if (documents) {
      //Change every time a new user arrives
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUser(options);
    }
  }, [documents]);
  return (
    <div className="create-form">
      <h2 className="page-title">New Project</h2>

      <form onSubmit={submitProject}>
        <label htmlFor="name">
          <span>ProjectName: </span>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="detail">
          <span>ProjectDetail: </span>
          <textarea
            type="text"
            value={detail}
            required
            onChange={(e) => setDetail(e.target.value)}
          />
        </label>

        <label htmlFor="date">
          <span>Date: </span>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label htmlFor="category">
          {/* create category and assign to select option */}
          <span>Category</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label htmlFor="assignproject">
          {/* map user and show option select */}
          <span>Assignfromuser</span>
          <Select
            options={users}
            onChange={(option) => setAssignfromuser(option)}
            isMulti
          />
        </label>
        <button className="btn">AddProject</button>
      </form>
      {formError && <p className="error">{formError}</p>}
    </div>
  );
};

export default Create;
