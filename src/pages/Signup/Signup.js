import "./Signup.css";

import { useState } from "react";
//hook
import { useSignup } from "../../hooks/useSignup";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumnail, setThumnail] = useState(null);
  const [thumnailError, setThumnailError] = useState(null);
  const { error, isPending, signup } = useSignup();

  const submitForm = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumnail);
    setEmail("");
    setPassword("");
    setDisplayName("");
    setThumnail("");
  };
  //handle image from user
  const handleThumnail = (e) => {
    setThumnail(null);
    const selectFile = e.target.files[0];
    console.log(selectFile);

    if (!selectFile) {
      setThumnailError("Please Select file");
      return;
    }
    if (!selectFile.type.includes("image")) {
      setThumnailError("Please Select image file");
      return;
    }
    if (selectFile.size > 2000000) {
      setThumnailError("Please Select File Size less than 100000");
      return;
    }
    setThumnailError(null);
    setThumnail(selectFile);
    console.log("Image Profile updated");
  };
  return (
    <form className="auth-form" onSubmit={submitForm}>
      <h2>Signup</h2>
      <label htmlFor="email">
        <span>Email: </span>
        <input
          type="email"
          required
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label htmlFor="password">
        <span>Password: </span>
        <input
          type="password"
          required
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label htmlFor="displayName">
        <span>Name: </span>
        <input
          type="text"
          required
          placeholder="Enter Name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label htmlFor="Thumnail">
        <span>ImageProfile: </span>
        <input
          type="file"
          required
          placeholder="Upload"
          onChange={handleThumnail}
        />
        {thumnailError && <p className="error">{thumnailError}</p>}
      </label>
        {!isPending && <button className="btn">Signup</button>}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Signup;
