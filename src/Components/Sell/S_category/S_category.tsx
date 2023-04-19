import { useState } from 'react';
 
import './S_category.scss';
import { HiDesktopComputer } from "react-icons/hi";
import { IoMdShirt } from "react-icons/io";
import { MdChair } from "react-icons/md";
import { GiGamepad } from "react-icons/gi";
import { RiErrorWarningLine } from "react-icons/ri";

type sell = {
    category: string;
    setcategory : React.Dispatch<React.SetStateAction<string>>;
}

const S_category = ( {category, setcategory } : sell) => {
    return (
        <div className="category">
            <div className="message">
                <p> Choose a category </p>
            </div>

            <div className="category-box">
                <div className={category === "Computer" ? "btn-category active" : "btn-category" }  
                    onClick={() => setcategory('Computer')}>
                    <p>Computer</p>
                    <HiDesktopComputer className="icon" />
                </div>
                <div className={category === "Fashion" ? "btn-category active" : "btn-category" } 
                    onClick={() => setcategory('Fashion')}>
                    <p>Fashion</p>
                    <IoMdShirt className="icon" />
                </div>
                <div className={category === "Furniture" ? "btn-category active" : "btn-category" }
                    onClick={() => setcategory('Furniture')}>
                    <p>Furniture</p>
                    <MdChair className="icon" />
                    </div>
                <div className={category === "Games" ? "btn-category active" : "btn-category" }
                    onClick={() => setcategory('Games')}>
                    <p>Games</p>
                    <GiGamepad className="icon" />
                </div>
            </div>
        </div>
    )
}

export default S_category;