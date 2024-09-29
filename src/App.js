import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import AdminDashboard from "./components/AdminDashboard";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Admin" element={<AdminDashboard />} />
      <Route path="/products" element={<ProductForm />} />
    </Routes>
  );
}

export default App;

// import { Route,Routes } from "react-router-dom";

// import Signup from './components/Signup';
// import Login from './components/Login';
// import AdminDashboard from "./components/AdminDashboard";
// import ProductForm  from "./components/ProductForm";

// function App() {
//   <Route>
//     <Route path = "/Signup" element = {<Signup/>}/>
//     <Route path = "/Login" element = {<Login/>}/>
//     <Route path = "/Admin" element = {<AdminDashboard/>}/>
//     <Route path = "/products" element = {<ProductForm/>}/>
//   </Route>
// }

// import Home from './pages/Home';
// import ProductForm from './pages/ProductForm';
// import AdminDashboard from './pages/AdminDashboard';




// function App() {
//   <Route>
//     <Route path="/" element = {<Home />}/>
//     <Route path="/product" element = {<ProductForm/>}/>
//     <Route path="/admin" element = {<AdminDashboard/>}/>
//   </Route>
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
