import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router';
import Layout from './Layout';
import About from './About/About';
import Contact from './Contact';
import Home from './Home';
import Github, { githubloader } from './Github/Github';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route 
      path='github' 
      loader={githubloader}
      element={<Github/>}/>
    </Route>
  )
)
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

