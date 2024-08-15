import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';
import { CartPovider } from './Components/ContextReducer.js';

function App() {
  return (

    <CartPovider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element = {<Home/>} />
            <Route exact path="/login" element = {<Login/>} />
            <Route exact path="/signup" element = {<SignUp/>} />
          </Routes>
        </div>
      </Router>
    </CartPovider>
  );
}

export default App;
