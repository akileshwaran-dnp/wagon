import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from './components/Profile';
import Cart from "./components/Cart";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/cart" element={<Cart />} />
        <Route path="/home/profile" element={<Profile />} />
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
