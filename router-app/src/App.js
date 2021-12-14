
import './App.css';
import Products from './components/products';
import Dashboard from './components/admin/dashboard';
import Posts from './components/posts';
import {BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet}  from "react-router-dom";
import Home from './components/home';
import NavBar from './components/navbar';
import NotFound from './components/notFound';
import ProductDetails from './components/productDetails';
import SavedProduct from './components/savedProduct';


function App() {
  return (
    <div>
    <NavBar/>

    <div className="content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}>
          <Route index element={<main style={{ padding: "1rem" }}><p>Select an invoice</p></main>}/>
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="/savedProduct" element={<SavedProduct/>}  />
        <Route path="/admin" element={<Dashboard/>}  />

        <Route path="/posts" element={<Posts/>}  />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
    </div>
  );
}

export default App;
