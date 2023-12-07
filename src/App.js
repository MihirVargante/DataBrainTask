import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './pages/Home'
import { fetchAllCategoriesAsync, fetchAllProductsAsync } from './features/products/productSlice';
import PersonalDetails from './pages/PersonalDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/personalDetails",
    element: (<PersonalDetails/>),
  },
]);
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllProductsAsync())
    dispatch(fetchAllCategoriesAsync())
},[dispatch])
  return (
    // <div className="App">
    //   <Router>
    //   <Navbar/></Router>
    //   <RouterProvider router={router} />
    // </div>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalDetails" element={<PersonalDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
