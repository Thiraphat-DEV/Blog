import "./App.css";

//router dom
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//required sidebar
import Sidebar from "./components/Sidebar/Sidebar";
//Navbar
import Navbar from "./components/Navbar/Navbar";

//page
/*
dashboard
login
signin
create
project
*/
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Project from "./pages/Project/Project";
import Create from "./pages/Create/Create";
import { useAuthContext } from "./hooks/useAuthContext";
import Onlineuser from "./components/Onlineuser/Onlineuser";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        {/* required if check of user and show sidebar */}
          {user &&<Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route path="/" exact>
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/singup">
                {!user && <Signup />}
                {user && <Redirect to="/" />}
              </Route>
              <Route path="/login">
                {!user && <Login />}
                {user && <Redirect to="/" />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/project/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
            </Switch>
          </div>
          {user && <Onlineuser />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
