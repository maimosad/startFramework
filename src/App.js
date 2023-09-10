import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About';
import Contactus from './Contactus';
import Portofolio from './Portofolio';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
 import { RouterProvider, createBrowserRouter } from 'react-router-dom';

 let router =createBrowserRouter([
{path:'',element:<Layout/>,children:[
{path:'home',element:<Home/>},
{path:'portofolio',element:<Portofolio/>},
{path:'contactus',element:<Contactus/>},
{path:'about',element:<About/>},
{path:'home',element:<Home/>},
]}




 ])
function App() {
  return  <RouterProvider router={router}></RouterProvider>
}

export default App;
