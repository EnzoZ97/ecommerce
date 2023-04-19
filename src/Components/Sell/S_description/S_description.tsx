import { useState } from 'react';

import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";


 
import './S_description.scss'

type list = {
    index: number,
    item: string
}

type description = {
    description : Array<list>;
    setdescription : React.Dispatch<React.SetStateAction<Array<list>>>;
}

const S_description = ( { description, setdescription } : description  ) => {
    const [d_item, setd_item] = useState('');
    const [edit, setedit] = useState(Array<number>); 

    type textarea = {
        index: number,
        item: string
    }
    const [listTextArea, setlistTextArea] = useState(Array<textarea>);
    

    function update () :void{
        const item = {
            index: (description.length - 1) + 1,
            item: d_item
        }
       if(description.length < 10){
        const new_list = [...description, item];
        setdescription(new_list);
       }

    }

    function updateEdit( index: number ): void{
        const new_edit : Array<number> = [...edit, index];
        setedit(new_edit);

    }

    function checkTextArea( index : number ): void{
        let new_list = description;
        listTextArea.forEach(function(textareaElem){
            description.forEach(function(elem){
                if(textareaElem.index === elem.index){
                    const item = {
                        index: textareaElem.index,
                        item: textareaElem.item
                    }
                    
                    new_list.splice(textareaElem.index,1,item);
                    setdescription(new_list);
                    
                }
            })
        })

        const list : Array<number> = edit.slice(index-1, 0);
        setedit(list);
     
    }

    function handleChange (value: string, index: number) : void{
        let isInclude = false;
        let new_list = listTextArea;
        listTextArea.forEach(function(elem) {
            if(elem.index === index){
                const item = {
                    index: index,
                    item: value
                }

                new_list.splice(index,1,item);
                setlistTextArea(new_list);
                isInclude = true;      
            }
        })

        if(!isInclude){
            const item = {
                index: index,
                item: value
            }
            new_list = [...listTextArea, item];
            setlistTextArea(new_list);
        }     
    }

    function removeItem ( index : number ) : void {      
        let new_list : Array<list> =  description.filter((elem) => elem.index != index );
        setdescription(new_list);  
    }

    return (
        <div className="description">
            <div className="description-message">
                <p>In this section you most to write details about 
            the product that you want to sell, also you can add only 10 items </p>
            </div>

            <div className="description-box">
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" className="description"
                    onChange={(e) => setd_item(e.target.value)}/>
            </div>

            <button className="btn-description" onClick={() => update()}>add item</button>

            <div className="list-description">
                {
                    description.map((elem) => (
                        <div className="box-item" key={elem.index} >
                           <div className="item"  style={edit.includes(elem.index) ? {display: "none"} : {} }> {elem.item} </div>
                           <textarea style={edit.includes(elem.index) ? { display: "block" } : { display: "none" } } 
                                onChange={(e) => handleChange(e.target.value, elem.index)}></textarea>
                           <div className="icons">
                                <IoMdClose className="close" onClick={() => removeItem(elem.index)} />
                                <AiOutlineEdit className="edit" style={edit.includes(elem.index) ? {display: "none"} : {} }
                                     onClick={() => updateEdit(elem.index)} />
                                <AiOutlineCheck className="check" style={edit.includes(elem.index) === false ? {display: "none"} : {} } 
                                    onClick={() => checkTextArea(elem.index)} />
                           </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default S_description;