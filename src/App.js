import './App.css';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'
      element={<SignUp/>}
      />
      <Route path='/login'
      element={<Login/>}
      />
            <Route path='/home'
      element={<Home/>}
      />
      

     </Routes>
    </div>
  );
}

export default App;
