import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addItem } from '../../features/Data';


import './Sell.scss'
import S_category from './S_category/S_category';
import S_description from './S_description/S_description';
import S_images from './S_images/S_images';
import S_message from './S_message/S_message';


import { AiOutlinePlus } from "react-icons/ai";




const Sell = () => {
    type list_description = {
        index: number,
        item: string
    }
    type list_images = {
        index: number,
        url: string;
    }
    const Data = useAppSelector((state) => state.Data.value);
    const dispatch = useAppDispatch();
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');  
    const [description, setdescription] = useState(Array<list_description>);
    const [images, setimages] = useState(Array<list_images>)
    const [activeMessage, setactiveMessage] = useState(false);
    const [activeErrorMessage, setactiveErrorMessage] = useState(false);


    function update() : void {       
        const item = { 
            name: name, 
            img: imagesList() , 
            price: parseInt(price), 
            description: descriptionList() ,
            category: category 
        }

        if(name !== '' && price !== '' && category !== '' && description.length > 0 && images.length > 0){
            dispatch(addItem(item));
            setactiveMessage(true);
            setTimeout(
                () => {
                    setactiveMessage(false);
                },
                2200
            );
        }
        else{
            setactiveErrorMessage(true);
            setTimeout(
                () => {
                    setactiveErrorMessage(false);
                },
                2200
            );
        }
        
    }

    function imagesList () : Array<string> {
        let list : Array<string> = [];
        images.map((elem) => (
            list.push(elem.url)
        ))
        return list;
    }

    function descriptionList () : Array<string> {
        let list : Array<string> = [];
        description.map((elem) => (
            list.push(elem.item)
        ))
        return list;
    }


    return (
        <div className="sell">
            <div className="form">
                <div className="name-box">
                    <label htmlFor="name" className="label-name">Name:</label>
                    <input type="text" id="name" className="input-name"
                        placeholder="Example: car" onChange={(e) => setname(e.target.value)} />
                </div>

                <div className="price-box">
                    <label htmlFor="price" className="label-price">Price:</label>
                    <input type="number" id="price" className="input-price"
                        placeholder="Example: $40" onChange={(e) => setprice(e.target.value)} />
                </div>

                <S_category category={category} setcategory={setcategory} />

                <S_description description={description} setdescription={setdescription} />
                
                <S_images images={images} setimages={setimages} />
                
                
            </div>
            <button className="btn-sell" onClick={() => update()}>Sell</button>

            <S_message activeMessage={activeMessage} activeErrorMessage={activeErrorMessage} />
            
            
        </div>
    )
}

export default Sell;