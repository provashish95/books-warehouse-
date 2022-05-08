
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Footer from './components/Footer/Footer';
import Inventories from './components/Home/Inventories/Inventories';
import Login from './components/Home/Login/Login';
import RequireAuth from './components/Home/RequireAuth/RequireAuth';
import ManageInventory from './components/Home/ManageInventory/ManageInventory';
import AddInventoryItem from './components/Home/AddInventoryItem/AddInventoryItem';
import MyBooks from './components/Home/MyBooks/MyBooks';
import NotFound from './components/Home/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='inventory/:id' element={
          <RequireAuth>
            <Inventories></Inventories>
          </RequireAuth>
        }></Route>
        <Route path='addNewInventory' element={
          <RequireAuth>
            <AddInventoryItem></AddInventoryItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/myItems' element={<MyBooks></MyBooks>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
