import './Product.scss';

import P_images from './P_Images/P_images';
import P_info from './P_Info/P_info';
import P_addToCart from './P_addToCart/P_addToCart';


const Product = () => {
    
    return (
        <div className="Product">
            <P_images />
            <P_info />
            <P_addToCart />
        </div>
    )
}

export default Product;