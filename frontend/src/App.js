import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Sign from "./screens/sign";
import Home from "./screens/home";
import Profile from "./screens/profile";

export default function App(){
  return (
    <Router>
      <Route path="/" exact render={() => <Sign />} />
      <Route path="/home" exact render={() => <Home />} />
      <Route path="/profile/:id" exact render={() => <Profile />} />
    </Router>
  );
}
