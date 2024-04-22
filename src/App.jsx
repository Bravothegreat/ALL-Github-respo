

// import {  Routes, Route, NavLink, BrowserRouter, Router, Link } from "react-router-dom"
// 
// import Navbar from "./component/Navbar"
// // import About from "./component/About"
// // import Contact from "./component/Contact"


// function App() {   
//   return (
//     <>
//       <Navbar />
     

//     </>
    
//   )
// }

// export default App


import Navbar from './component/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
// import ErrorBoundary from './pages/ErrorBoundary';
//import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ErrorMessage from './pages/ErrorPage';
import "./css/index.css"

function App () {
  return (
    <>
    
   
      
        <Navbar />
      
  

    </>
  )
}

export default App;