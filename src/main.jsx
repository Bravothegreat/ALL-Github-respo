
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, useRouteError, BrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import RepoDetails from './pages/Repodetails'
import ErrorPage from './pages/Errorpage'
import AppOutlet from './pages/Appoutlet'
//import About from './component/About'
// import createApp from './component/links'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      
      <Route path="/repodetails" element={<AppOutlet />}>
        <Route path=":id" element={<RepoDetails />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
   </React.StrictMode>
   
   
)