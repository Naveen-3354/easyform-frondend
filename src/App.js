import './App.css';
import Login from './pages/login/Login';

import Navbar from './pages/navbar/Navbar';
import Register from './pages/register/Register';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      {/* <Login /> */}

      {/* <Register /> */}
      <Navbar />

      <Home />

    </div>
  );
}

export default App;
