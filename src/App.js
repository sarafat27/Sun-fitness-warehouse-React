import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import EquipmentDetail from './Pages/EquipmentDetail/EquipmentDetail';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Blogs from './Pages/Blogs/Blogs';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<EquipmentDetail></EquipmentDetail>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
