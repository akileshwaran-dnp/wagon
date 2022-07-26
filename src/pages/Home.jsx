import { useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom';
import Cart from "../components/Cart";
import Profile from "../components/Profile";
import '../styles/navbar.css';

function Home () {

    const [searchParams, setSearchParams] = useSearchParams();
    const [isCart, setIsCart] = useState(true);

    useEffect ( () => {
        console.log (searchParams.get("name"));
    },[]);

    return (
        <div className="main-body">
            {/* <Navbar /> */}
            <nav className="navbar">
                <div className="logo">
                    <span class="material-symbols-outlined">shopping_basket</span>
                    <li onClick={() => setIsCart(true) } className="title">Wagon</li>
                    <p>products with wheels</p>
                </div>
                <div className="profile">
                    <li ><span class="material-symbols-outlined">contacts</span></li>
                    <li><span class="material-symbols-outlined">credit_card</span></li>
                    <li onClick={() => setIsCart(false) }><span class="material-symbols-outlined">face_4</span></li>
                </div>
                
            </nav>
            {isCart? <Cart /> : <Profile />}
        </div>
    );
};

export default Home;