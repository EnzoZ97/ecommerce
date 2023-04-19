import { useState } from 'react';
 
import { useAppSelector } from "../../../app/hooks";
import { IoIosArrowDown } from "react-icons/io";


import './Sorting.scss';

type sort = {
    sortSelected : string;
    setsortSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Sorting = ({sortSelected , setsortSelected} : sort)  => {
    const categoryChoosed = useAppSelector((state) => state.Category.value);
    //const [sortSelected, setsortSelected] = useState('Default');
    const [activeSortingList, setactiveSortingList] = useState(false);

    function updateActive():void{
        activeSortingList === true ? setactiveSortingList(false) : setactiveSortingList(true);
    }

    function updateSortSelected(value : Array<string>):void{
        const sorting : string = value.join(" ");
        setsortSelected(sorting);
        updateActive();
    }


    return (
        <div className="cagetogy-and-sorting" role="cagetogy-and-sorting">
                <h2 id={categoryChoosed}>{ categoryChoosed === 'All' ? '' :  categoryChoosed}</h2>
                <div className="sorting" role="sorting">
                    <p className="sort-by">Sort by:</p>
                    <div className="select">
                        <div className="sort-selected" onClick={() => updateActive()}>
                            <p className="sort"> { sortSelected } </p>
                            <div className={activeSortingList === true ? "icon icon-active" : "icon" }>
                                <IoIosArrowDown />
                            </div>

                        </div>
                        <ul className={activeSortingList === true ? "sorting-list sorting-list-active" : "sorting-list "}  >
                            <li className={sortSelected === 'Default' ? "option option-active" : "option" }  
                                onClick={() => updateSortSelected(['Default'])}>Price: Default</li>
                            <hr />
                            <li className={sortSelected === 'low-to-High' ? "option option-active" : "option" } 
                                onClick={() => updateSortSelected(['Low', 'to', 'High'])}>Price: Low to High</li>
                            <hr />
                            <li className={sortSelected === 'High-to-Low' ? "option option-active" : "option" } 
                                onClick={() => updateSortSelected(['High', 'to', 'Low'])}>Price: High to Low</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Sorting;