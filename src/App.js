
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import SignIn from './components/SignIn';
import Getland from './components/Getland';
import AddLand from './components/AddLand';
import SignUp from './components/SignUp';
// import bootstrap for styling
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <div className="">
        <header className="">
        <h1>Land Management System</h1>
        <nav className="navbar1">
          <Link to="/signin" className="navlinks">Sign In</Link>
          <Link to="/signup" className="navlinks">Sign Up</Link>
          <Link to="/" className="navlinks">Get Land</Link>
          <Link to="addland" className="navlinks">Add Land</Link>
        </nav>
              <Routes>
                 <Route path='/signin' element = {<SignIn/>} />
                 <Route path='/signup' element = {<SignUp/>} />
                 <Route path='/'       element = {<Getland/>} />
                 <Route path='/addland'element = {<AddLand/>} />
              </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
