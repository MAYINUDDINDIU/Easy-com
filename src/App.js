import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer/Footer';
import P_category from './Components/Products/P_category';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='Category' element={<P_category />}>Home</Route>
        <Route path='login' element={<Login />}>Home</Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
