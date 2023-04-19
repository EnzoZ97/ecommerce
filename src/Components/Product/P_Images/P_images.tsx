import { useAppSelector } from '../../../app/hooks';
import { useState } from 'react';

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import './P_images.scss';

const P_images = () => {
    const Product = useAppSelector((state) => state.Product.value);
    const imagesList : Array<{url : string, index: number}> = createImagesList();
    const images = imagesList.slice(0,4);
    const [mainImage, setmainImage] = useState(imagesList[0].url);
    const [index, setindex] = useState(0);
    const [activeSlider, setactiveSlider] = useState(false);

    function createImagesList () : Array<{url : string, index: number}> {
        let list : Array<{url : string, index: number}> = [];
        let i = 0;
        Product.img.forEach(function(elem){
            list.push({url : elem, index : i});
            i ++;
        })
        return list;
    }; 

    function updateMainImage ( url : string, index : number) : void{
        setmainImage(url);
        setindex(index);
    } 

    function showMoreImages(index : number){
        setindex(index);
    }

    function updateIndex( index : number ):void{
        if(index < 0){
            setindex(imagesList.length - 1);
        }
        else if (index == imagesList.length){
            setindex(0)
        }
        else{
            setindex(index);
        }
    }


    return (
        <div className="images">
                <div className="list-images">
                    {
                        Product.img.length > 4 
                        ?
                        images.map((elem) => (
                            <div className={index === elem.index ? 'image-active' : 'image-disabled'}
                                key={elem.index} 
                                onMouseEnter={() => updateMainImage(elem.url, elem.index)} 
                                onClick={() => setactiveSlider(true)} >
                                <img src={elem.url} />
                            </div>
                        ))
                        :
                        imagesList.map((elem) => (
                            <div className={index === elem.index ? 'image-active' : 'image-disabled'} 
                                key={elem.index}
                                onMouseEnter={() => updateMainImage(elem.url, elem.index)}
                                onClick={() => setactiveSlider(true)} >
                                <img src={elem.url} />
                            </div>
                        ))
                    }
                    {
                        Product.img.length > 4 
                        ? 
                        <div className={index === 4 ? 'image-active' : 'image-disabled'} 
                                onMouseEnter={() => showMoreImages(4)}
                                    onClick={() => setactiveSlider(true)}>+{Product.img.length - 4}</div> 
                        : 
                        ''
                    }
                </div>
                <div className="main-image">
                    <img src={mainImage} onClick={() => setactiveSlider(true)} /> 
                </div>
                <div className={activeSlider === true ? "slider" :"slider-disabled"}>
                    <div className="background"></div>
                    <div className="slider-content">
                        <div className="icon-and-index" role="show index and icon close">
                            <div className="box-index">
                                <p className="info-index"> { index + 1 } / {imagesList.length} </p>
                                <IoClose className="slider-icon-close" onClick={() => setactiveSlider(false)} />
                            </div>
                        </div>
                       <div className="arrows-and-image" role="show arrows and image">
                            <AiOutlineArrowLeft className="arrow-icon" onClick={() => updateIndex(index - 1 )} />
                            <div className="slider-image">
                                <img src={imagesList[index].url} key={imagesList[index].index} className="slider-main-image" />

                            </div>
                            <AiOutlineArrowRight className="arrow-icon" onClick={() => updateIndex(index + 1 )} />
                       </div>
                       <div className="arrows-responsive" role="show arrows in some diivce" >
                            <AiOutlineArrowLeft className="arrow-icon" onClick={() => updateIndex(index - 1 )} />
                            <AiOutlineArrowRight className="arrow-icon" onClick={() => updateIndex(index + 1 )} />
                       </div>
                    </div>
                </div>
            </div>
    )
}


export default P_images;