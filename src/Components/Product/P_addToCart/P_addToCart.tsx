import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useState } from 'react';
import { Link } from "react-router-dom";

import { addProduct } from "../../../features/Cart/List";

import { IoIosArrowDown } from "react-icons/io";
import './P_addToCart.scss';

const P_addToCart = () => {
    const Product = useAppSelector((state) => state.Product.value);
    const myCart = useAppSelector((state) => state.List.value);
    const dispatch = useAppDispatch();
    const [amount, setamount] = useState(1);
    const [activeDropdown, setactiveDropdown] = useState(false);
    const [moreActive, setmoreActive] = useState(false);
    const [amountFromInput, setamountFromInput] = useState(0);

    function updateDropdown(): void{
        activeDropdown === true ? setactiveDropdown(false) : setactiveDropdown(true)
    }

    function updateAmount( index: number ) : void{
        setamount(index);
        updateDropdown();
    }

    function addMoreUnits() : void{
        setamount(amountFromInput);
        updateDropdown();
    }

    function addToCart():void{
        interface item {
            id: string,
            name: string,
            img: Array<string> ,
            price: number,
            description: Array<string> ,
            category: string,
            amount: number
        }

        const obj : item = {
            id: Math.floor(Math.random() * 100000).toString(2),
            name: Product.name,
            img: Product.img ,
            price: Product.price,
            description: Product.description ,
            category: Product.category,
            amount: amount
        };


        console.log(obj);
        dispatch(addProduct(obj));
    }

    return (
        <div className="addToCart">
                <p className="productPrice"> <span>$</span>{ Product.price } </p>
                <div className="amount" >
                    <div className="units" onClick={() => updateDropdown()}>
                        <p>Amount: <strong>{amount} units</strong> </p>
                        <IoIosArrowDown className={activeDropdown === true ? "icon-arrow icon-arrow-active" : "icon-arrow"} />
                    </div>
                    <div className={activeDropdown === true ? "dropdown" : "dropdown-disabled"}>
                        <li className={ amount === 1 ? "item item-seleted" : "item" } 
                            onClick={() => updateAmount(1)} >1 unit</li>
                        <li className={ amount === 2 ? "item item-seleted" : "item" } 
                             onClick={() => updateAmount(2)} >2 units</li>
                        <li className={ amount === 3 ? "item item-seleted" : "item" } 
                             onClick={() => updateAmount(3)} >3 units</li>
                        <li className={ amount === 4 ? "item item-seleted" : "item" } 
                             onClick={() => updateAmount(4)} >4 units</li>
                        <li className={ amount === 5 ? "item item-seleted" : "item" } 
                             onClick={() => updateAmount(5)} >5 units</li>
                        <li className="item" onClick={() => setmoreActive(true)}>More</li>

                        <div className= { moreActive === false ? "more-disabled" : "more"  } >
                            <p>Amount:</p>
                            <div className="more-input">
                                <input type="number" onChange={(e) => setamountFromInput(parseInt(e.target.value))} />
                                <button className="btn-add" onClick={() => addMoreUnits()}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addProduct">
                    <Link to="/MyCart" className="btn-addProduct" onClick={() => addToCart()}>Add to Cart</Link>
                </div>
                
            </div>
    )
}

export default P_addToCart;