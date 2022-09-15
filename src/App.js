import './App.css';
import Topbar from "./components/topbar/topbar";
import Home from './components/Pages/home/home';
import Single from './components/Pages/single/single';
import Write from './components/write/write';
import Setting from './components/Pages/setting/setting';
import Login from './components/Pages/login/login';
import Register from './components/Pages/Register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/context';

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={user?<Home/>:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={user?<Home/>:<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path="/write" element={user?<Write/>:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/post/:postId" element={<Single/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Setting" element={user?<Setting/>:<Register/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
