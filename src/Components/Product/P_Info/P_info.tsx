import { useAppSelector } from "../../../app/hooks";
import './P_info.scss';

const P_info = () => {
    const Product = useAppSelector((state) => state.Product.value);

    return (
        <div className="info">
            <h3 className="productName"> {Product.name} </h3>
            <hr />
            <div className="description">
                <p className="title-item">About this item</p>
                <ul>
                    {
                        Product.description.map((elem) => (
                            <li key={elem}>{elem}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default P_info;