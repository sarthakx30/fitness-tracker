import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id" exact component={ExerciseList}/>
      <Route path="/create" exact component={ExerciseList}/>
      <Route path="/user" exact component={ExerciseList}/>
    </Router>
  );
}

export default App;
