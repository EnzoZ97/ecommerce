import { useState } from 'react';

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updatePageNumber } from "../../../features/NavigationPageNumber/PageNumber";
import './PageNavigation.scss';


const PageNavigation = () => {
    const PageNumber:number = useAppSelector((state) => state.PageNumber.value);
    const category : string = useAppSelector((state) => state.Category.value);
    const Data : any = useAppSelector((state) => state.Data.value);
    const dispatch = useAppDispatch();
    const Amount_of_pages : Array<number> = getAmount_of_pages(); 

    function getAmount_of_pages () : Array<number>{
        let pages : number = Data.length / 5;
        let pagesByCategory : number = Data.filter((elem : any) => elem.category === category).length / 5;
        const Pagelist : Array<number> = [];
        
        console.log(pagesByCategory);
        switch(category){
            case 'All':
                if(pages % 5 != 0){
                    pages++;
                }
                for(let i = 1 ; i <= Math.floor(pages); i++){
                    Pagelist.push(i);
                }
                break;
            case 'Computer':
                if(pagesByCategory % 5 != 0){
                    pagesByCategory++;
                }
                for(let i = 1 ; i <= Math.floor(pagesByCategory); i++){
                    Pagelist.push(i);
                }
                break;
            case 'Fashion':
                if(pagesByCategory % 5 != 0){
                    pagesByCategory++;
                }
                for(let i = 1 ; i <= Math.floor(pagesByCategory); i++){
                    Pagelist.push(i);
                }
                break;
            case 'Furniture':
                if(pagesByCategory % 5 != 0){
                    pagesByCategory++;
                }
                for(let i = 1 ; i <= Math.floor(pagesByCategory); i++){
                    Pagelist.push(i);
                }
                break;
            case 'Games':
                if(pagesByCategory % 5 != 0){
                    pagesByCategory++;
                }
                for(let i = 1 ; i <= Math.floor(pagesByCategory); i++){
                    Pagelist.push(i);
                }
            break;

        }
        return Pagelist;    
    }

    console.log(Amount_of_pages);

    function ListOfPages(): Array<number> {
        let new_list : Array<number> = [];
        if(PageNumber < 4){
            new_list = Amount_of_pages.slice(0 , 5);
        }
        else if(PageNumber > 3){
            new_list = Amount_of_pages.slice((PageNumber - 3), (PageNumber + 2));
            if((Amount_of_pages.length - PageNumber) < 3){
                new_list = Amount_of_pages.slice(Amount_of_pages.length - 5, Amount_of_pages.length);
            }
        }
        
        return new_list;
    }
    
    function updatePage( index: number): void{
        dispatch(updatePageNumber(index));
    }

    return (
        <div className="pageNavitacion">
            { PageNumber > 3 ? <div className="page" style={{cursor: 'auto'}}>...</div> : ''}

            {
                ListOfPages().map((index) => (
                    <div key={index} className= {PageNumber === index ? 'active' : 'page' } 
                        onClick={() => updatePage(index)}> { index } </div>
                ))
            }

            { (Amount_of_pages.length -  PageNumber) > 2 ? <div className="page"  style={{cursor: 'auto'}}>...</div> : ''}

            {
                (Amount_of_pages.length -  PageNumber) > 2 
                ?
                <div className="page" onClick={() => updatePage(Amount_of_pages[Amount_of_pages.length - 1])} > { Amount_of_pages[Amount_of_pages.length - 1] } </div>
                :
                ''
            }
        </div>
    )
}

export default PageNavigation;