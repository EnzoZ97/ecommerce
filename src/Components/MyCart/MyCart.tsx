import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { removeProduct } from '../../features/Cart/List';
import { RiErrorWarningLine } from "react-icons/ri";

import './MyCart.scss';

const MyCart = () => {
    const cart = useAppSelector((state) => state.List.value);
    const dispatch = useAppDispatch();

    function update() : string{
        let total : number = 0;
        cart.map((elem) => (
            total += elem.price * elem.amount 
        ))  
        return total.toFixed(2);
    }

    function remove ( id : string ): void{
        dispatch(removeProduct(id));
    }

    const cartNotEmpty = () => {
        return (
            <div className="MyCart">
            <div className="products">
                {
                    cart.map((elem) => (
                        <div className="myProduct" key={elem.id}>
                            <img className="main-image" src={elem.img[0]} />
                            <div className="name">
                                <h4>You added to your cart</h4>
                                <p>{elem.name}</p>
                            </div>
                            <div className="amount-and-price">
                                <p className="amount">{elem.amount} 
                                    {elem.amount > 1 ? ' product ' : ' products '}
                                        in your cart:
                                </p>
                                <p className="price">${elem.price}</p>
                            </div>
                            <div className="total-by-amount">
                                <p className="total">Total</p>
                                <p>${(Math.round(elem.price * elem.amount)).toFixed(2)}</p>
                            </div>
                            <div className="remove">
                                <button className="btn-remove" onClick={() => remove(elem.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                    
                }
            </div>
            <div className="total-by-all-products">
                <p>Total: ${update()}</p>
            </div>
        </div>
        )
    }

    const CartEmpty = () => {
        return (
            <div className="cartEmpty">
                <div className="box-message">
                    <h1 className="message">There's no are products in your cart</h1>
                    <RiErrorWarningLine className="icon" />
                </div>
            </div>
        )
    }

    return (
        <div className="cart">
            {
                cart.length > 0 
                ? 
                cartNotEmpty()
                :
                CartEmpty()
            }
        </div>
    )
}

export default MyCart;