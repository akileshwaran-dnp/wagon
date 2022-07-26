import Card from "./Card";
import '../styles/cart.css';
import {useState, useEffect} from 'react';

function Cart () {

    const [products, setProducts] = useState ([]);
    
    useEffect ( () => {
        renderProducts ();
    }, []);

    const renderProducts = async () => {
        const api = await fetch ("https://62dd4fadccdf9f7ec2c48e96.mockapi.io/api/v1/products");
        const data = await api.json();
        setProducts (data);
    };

    return (
        <div className="cart">
            <div className="cart-sec">
                <h4 className="sec-title">Trending</h4>
                <div className="sub-cart">
                    {
                        products.slice(0,5).map((product) => {
                            return (
                                <div key={product.id}>
                                    <Card name={product.name} picture={product.picture} price={product.price} />
                                </div>     
                            );
                        })
                    }
                </div>
            </div>
            <div className="cart-sec">
                <h4 className="sec-title">Books</h4>
                <div className="sub-cart">
                    {
                        products.slice(5,10).map((product) => {
                            return (
                                <div key={product.id}>
                                    <Card name={product.name} picture={product.picture} price={product.price} />
                                </div>     
                            );
                        })
                    }
                </div>
            </div>
            <div className="cart-sec">
                <h4 className="sec-title">Electronics</h4>
                <div className="sub-cart">
                    {
                        products.slice(10,15).map((product) => {
                            return (
                                <div key={product.id}>
                                    <Card name={product.name} picture={product.picture} price={product.price} />
                                </div>     
                            );
                        })
                    }
                </div>
            </div>
            <div className="cart-sec">
                <h4 className="sec-title">Clothings</h4>
                <div className="sub-cart">
                    {
                        products.slice(15,20).map((product) => {
                            return (
                                <div key={product.id}>
                                    <Card name={product.name} picture={product.picture} price={product.price} />
                                </div>     
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;