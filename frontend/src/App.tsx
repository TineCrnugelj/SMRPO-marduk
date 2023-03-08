import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Login from './pages/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <Router>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/add-user' element={<AddUser />}/>
              <Route path='/login' element={<Login />} />
          </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
