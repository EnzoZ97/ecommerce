import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeProduct } from '../../features/Cart/List';
import { updateCategory } from '../../features/Category/Choosed_Category';
import { updatePageNumber } from '../../features/NavigationPageNumber/PageNumber';


import './Navbar.scss';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";





const Navbar = () => {
    const [activeCart, setactiveCart] = useState(false);
    const [navbar_Categories, setnavbar_Categories] = useState(false);
    const dispacth = useAppDispatch();
    const list = useAppSelector((state) => state.List.value);
    const Category : string = useAppSelector((state) => state.Category.value);
    const PageNumber = useAppSelector((state) => state.PageNumber.value);
    const showSomeProducts = () => {
        const listOfProducts = list.slice(0,3)
        return (
            listOfProducts.map((elem) => (
                <div className="cart" id={elem.id}>
                    <div className="cart-item">
                            <img  src={elem.img[0]} className="cart-item-image" alt="cart-image" />
                            <div className="cart-item-description">
                                <p className="cart-item-name"><strong>Name:</strong> {elem.name} </p>
                                <p className="cart-item-price"><strong>Price:</strong> {elem.price} </p>
                                <p className="cart-item-amount"><strong>Amount:</strong> {elem.amount} </p>
                            </div>
                    </div>
                    <p className="removeProduct" onClick={() => remove(elem.id)}>Remove</p>
                </div>
            ))
        )
    }

    function remove(id:string){
        dispacth(removeProduct(id));
    }

    function totalPrice():string{
        let total: number = 0;
        list.map((elem) => total += elem.price * elem.amount);
        return total.toFixed(2);
    }

    function Update_Choosed_Category ( category: string ):void{
        dispacth(updateCategory(category));
        dispacth(updatePageNumber(1));
        setactiveCart(false);
    }

    return (
        <div className="Navbar">
            <nav className="nav-menu">
                <div className="logo">
                    <Link to="/" onClick={() => Update_Choosed_Category("All")}>
                        <a>Afterlife</a>
                    </Link>
                </div>

                <div className="nav-middle">
                    <ul className="list">
                        <li className="nav-item" id="categories-option">
                            <a href="#" >Categories</a>
                            <ul className="nav-item-categories-items">
                                    <li className="nav-item-category-item" onClick={() => Update_Choosed_Category("Computer")}>
                                        <Link to={`/computer`}>Computer</Link>
                                    </li>
                                    <li className="nav-item-category-item" onClick={() => Update_Choosed_Category("Fashion")}>
                                        <Link to={`/fashion`}>Fashion</Link>
                                    </li>
                                    <li className="nav-item-category-item" onClick={() => Update_Choosed_Category("Furniture")}>
                                        <Link to={`/furniture`}>Furniture</Link>
                                    </li>
                                    <li className="nav-item-category-item" onClick={() => Update_Choosed_Category("Games")}>
                                        <Link to={`/Games`}>Games</Link>
                                    </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/Sell">
                                <a>Sell</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Help">
                                <a>Help</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="cart-box" onClick={() => setactiveCart(true)}>
                    <AiOutlineShoppingCart className="cart" />
                    <div className="amount-of-products">
                        <p>{list.length}</p>
                    </div>
                </div>

                <div className="hamburger-box" onClick={() => setactiveCart(true)}>
                    <GiHamburgerMenu className="hamburgerMenu"  />
                </div>       
            </nav>

            
            <div className={activeCart ? "screen-black screen-black-active" : "screen-black"}
             onClick={() => setactiveCart(false)}></div>

            <div className={activeCart ? "list_of_products list_of_products-active" : "list_of_products" }  >
                <div className="Close-box" >
                    <IoClose className="Close"  onClick={() => setactiveCart(false)} />
                </div> 
                <div className="side-navbar">
                    <ul className="side-navbar-items">
                            <li className="side-navbar-item categories">
                                <a className="item" 
                                    onClick={() => navbar_Categories === true ? setnavbar_Categories(false) : setnavbar_Categories(true)}>
                                    Categories</a>
                            </li>
                            <li className={navbar_Categories ? " side-navbar-categories side-navbar-categories-active" : " side-navbar-categories"}  >
                                <ul className="categories-items">
                                    <li className="category-item" onClick={() => Update_Choosed_Category("Computer")}>
                                            <Link className="item" to={`/computer`}>Computer</Link>
                                    </li>
                                    <li className="category-item" onClick={() => Update_Choosed_Category("Fashion")}>
                                            <Link className="item" to={`/fashion`}>Fashion</Link>
                                    </li>
                                    <li className="category-item" onClick={() => Update_Choosed_Category("Furniture")}>
                                        <Link className="item" to={`/furniture`}>Furniture</Link>
                                    </li>
                                    <li className="category-item" onClick={() => Update_Choosed_Category("Games")}>
                                        <Link className="item" to={`/games`}>Games</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="side-navbar-item">
                                <Link to="/Sell" className="item" onClick={() => setactiveCart(false)}>
                                    <a>Sell</a>
                                </Link>
                            </li>
                            <li className="side-navbar-item">
                                <Link to="/Help" className="item" onClick={() => setactiveCart(false)}>
                                    <a>Help</a>
                                </Link>
                            </li>
                            <li className="side-navbar-item">
                                <Link to="/MyCart" className="item" onClick={() => setactiveCart(false)}>
                                    <a>Cart</a>
                                </Link>
                            </li>
                    </ul>
                    {
                       list.length > 0 
                            ? showSomeProducts()
                                : <div className="cart-empty">
                                    <p > You don't choose any product yet  </p>
                                    <RiErrorWarningLine className="warning-icon" />
                                </div>
                    }
                    {
                        list.length > 3 
                            ? 
                                <div className="cart-available">
                                    <Link className="all-items" to={'/MyCart'} onClick={() => setactiveCart(false)} >Show all items</Link> 
                                </div>
                                    : 
                                        ''
                    }
                    <p className="total">Total: <strong>${totalPrice()}</strong></p>
                </div>

                
            </div>
                        
            
        </div>
    )
}

export default Navbar;