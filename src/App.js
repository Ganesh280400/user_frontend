
import './App.css';
import UserHome from "./components/UserHome.js";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

import AddUser from './components/AddUser';

function App() {
  return (
      <>
          < BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/userlist" element={<UserHome/>} ></Route>
                  <Route path="/addUser" element={<AddUser />} ></Route>
              </Routes>

              <Footer/>
          </BrowserRouter>



      </>
  );
}

export default App;
