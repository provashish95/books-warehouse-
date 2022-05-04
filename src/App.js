
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Footer from './components/Footer/Footer';
import Inventories from './components/Home/Inventories/Inventories';
import Login from './components/Home/Login/Login';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='inventory/:id' element={<Inventories></Inventories>}></Route>
        <Route path='*' element={<p>NOT FOUND</p>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
