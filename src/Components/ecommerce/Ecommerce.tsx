import { useState } from 'react';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Link } from 'react-router-dom';
import { updateProduct } from '../../features/Product/Product';

import './Ecommerce.scss';
import PageNavigation from "./PageNavigation/PageNavigation";
import Sorting from './Sorting/Sorting';


const Ecommerce = () => {
    const PageNumber = useAppSelector((state) => state.PageNumber.value);
    const categoryChoosed = useAppSelector((state) => state.Category.value);
    const Data = useAppSelector((state) => state.Data.value);
    const dispatch = useAppDispatch();
    const [sortSelected, setsortSelected] = useState('Default');
    const productsByCategory = () => {
        let byCategory = [];
        if(categoryChoosed === 'All' ){
            byCategory = sorting();
        }
        else{
            byCategory = sorting().filter((elem) => elem.category === categoryChoosed);
        }
         
        return byCategory;
    }

    function Products () : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
        category: string; }> {
        let list : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> = [];
        
        if(PageNumber === 1) {
            list = productsByCategory().slice(0, 5);
        }
        else if (PageNumber > 1){
            list = productsByCategory().slice((PageNumber * 5) - 5, (PageNumber * 5));
        }
        return list;
    }

    function get_ShortName(name:string): string{
        let word: string = "";
        if(name.length >= 73){
            const new_name : Array<String> = name.split("").slice(0,73);
            new_name.push("...");
            word = new_name.join("");
        }
        else{
            word = name;
        }
        return word ;
    }


    function sorting() : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
        category: string; }>{
        let list = [];
        if(sortSelected === 'Default'){
            list = Data;
        }
        else if(sortSelected === 'Low to High'){
            list = quickSort(Data, 'Low to High');
        }
        else{
            list = quickSort(Data, 'High to Low');
        }
        return list;
    }

    function quickSort(arr : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
        category: string; }>, sort : string) : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }>{
        let list : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> = [];
       if(sort === 'Low to High'){
            list = ascendent(arr);
       }
       else if(sort === 'High to Low'){
            list = descendent(arr);
       }

       return list;
    }

    function ascendent ( arr : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
        category: string; }> ) : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> {
        //base case
        if(arr.length === 0){
            return [];
        }
    
        let mediumIndex = Math.floor(arr.length/2);
        let pivot : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }>  = [arr[mediumIndex]];
    
        let leftArr : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> = [];
        let rightArr : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> = [];
    
        for(let index = 0; index < arr.length; index++){
            if(index != mediumIndex){
                if(arr[index].price > pivot[0].price){
                    rightArr.push(arr[index]);
                }
                else{
                    leftArr.push(arr[index]);
                }
            }     
        }
    
        leftArr = ascendent(leftArr);
        rightArr = ascendent(rightArr);
        return leftArr.concat(pivot).concat(rightArr);
    }


    function descendent ( arr : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
        category: string; }> ) : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> {
        //base case
        if(arr.length === 0){
            return [];
        }
    
        let mediumIndex = Math.floor(arr.length/2);
        let pivot : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }>  = [arr[mediumIndex]];
    
        let leftArr : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> = [];
        let rightArr : Array<{ name: string, img: Array<string> , price: number, description: Array<string> ,
            category: string; }> = [];
    
        for(let index = 0; index < arr.length; index++){
            if(index != mediumIndex){
                if(arr[index].price < pivot[0].price){
                    rightArr.push(arr[index]);
                }
                else{
                    leftArr.push(arr[index]);
                }
            }     
        }
    
        leftArr = descendent(leftArr);
        rightArr = descendent(rightArr);
        return leftArr.concat(pivot).concat(rightArr);
    }

    function updateItem ( item : { name: string, img: Array<string>, price: number, description: Array<string>, category: string } ) : void{
        dispatch(updateProduct(item));
    }


    return (
        <div className="products">
            <div className="sorting" role="sorting">
                <Sorting sortSelected={sortSelected} setsortSelected={setsortSelected}/>
            </div>

            <div className="items" role="showProducts" >
                {
                    Products().map((elem) => (
                        <Link className="link" to={`/${elem.name}`} key={elem.name} onClick={() => updateItem(elem)}>
                            <div className="item">
                                <img src={elem.img[0]} alt="product-image" className="item-img" />
                                <div className="item-info">
                                    <p className="item-price"> ${elem.price} </p>
                                    <p className="item-title"> {get_ShortName(elem.name)} </p>                                
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className="page-navigation" role="navigation" >
                <PageNavigation />
            </div>
        </div>
    )
}

export default Ecommerce;