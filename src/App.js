
import Navbar from './components/Navbar';
import './App.css'
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/productlist" element={<ProductList />}>
            {/* <Route index element={<PostList />} /> */}
            
          </Route>
        </Routes>

      </Router>
    </div>

  );
}

export default App;
