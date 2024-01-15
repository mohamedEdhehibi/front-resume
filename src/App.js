
import Navbar from './components/Navbar';
import './App.css'
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Router>
        <Routes>
          <div className='content'></div>
          <Route>

          </Route>
        </Routes>

      </Router>
    </div>

  );
}

export default App;
