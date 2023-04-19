import { useState } from 'react';

import './S_images.scss';

type list = {
    index: number,
    url: string;
}

type images = {
    images : Array<list>;
    setimages : React.Dispatch<React.SetStateAction<Array<list>>>;
}



const S_images = ( { images, setimages } : images ) => {
    
    const [url, seturl] = useState('');

    function handlechange( value: string ) : void{
        seturl(value);
    }

    function updateList() : void{
        const item = {
            index: images.length + 1,
            url: url
        }
        const new_list : Array<list> = [...images, item];
        setimages(new_list);

    }

    function removeImage( index : number ) : void{
        const list : Array<list> = images.filter((elem) => elem.index != index);
        setimages(list);
    }

    return (
        <div className="images_list">
                    <div className="S_images-message">
                        <p>In this section you can only add images url</p>
                    </div>
                    <div className="box-getUrl">
                        <label htmlFor="image">Images:</label>
                        <input type="text" id="image" className="I_image"
                            onChange={(e) => handlechange(e.target.value)}/>
                    </div>

                    <button className="btn-image" onClick={() => updateList()}>Add Image</button>

                    <div className="box-showImages">
                        {
                            images.map((item) => (
                                <div className="item" key={item.index}>
                                    <img src={item.url} className="item-image" alt="item-image" />
                                    <button className="btn-removeImage" 
                                        onClick={() => removeImage(item.index)}>Remove</button>
                                </div>
                            ))
                        }
                    </div>
        </div>
    )
}


export default S_images;