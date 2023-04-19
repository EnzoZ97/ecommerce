import { useState } from 'react';

import './Help.scss';

import { IoIosArrowDown } from "react-icons/io";

const Help = () => {
    const [question_1, setquestion_1] = useState(false);
    const [question_2, setquestion_2] = useState(false);
    const [question_3, setquestion_3] = useState(false);
    const [question_4, setquestion_4] = useState(false);

    return (
        <div className="Help">
            <div className="content">
                <h1 className="title">How we can help you?</h1>
                <ul className="some-questions">
                    <li className="item">
                        <div className="question-box" onClick={() => question_1 === true ? setquestion_1(false) : setquestion_1(true)} >
                            <p className="question" >How can I sell a product?</p>
                            <IoIosArrowDown className={question_1 === true ? 'icon icon-active' : 'icon'}/>
                        </div>
                        <div className={question_1 === true ? 'answer-box answer-box-active' : 'answer-box'}  >
                            <p className="answer">In the navbar section is able an option call Sell
                            where you should fill out a form with the data of your product to want to sell. </p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="question-box" onClick={() => question_2 === true ? setquestion_2(false) : setquestion_2(true)} >
                            <p className="question" onClick={() => question_2 === true ? setquestion_2(false) : setquestion_2(true)} >Where is my Cart?</p>
                            <IoIosArrowDown className={question_2 === true ? 'icon icon-active' : 'icon'}/>
                        </div>
                        
                        <div className={question_2 === true ? 'answer-box answer-box-active' : 'answer-box'} >
                            <p className="answer">You can see your cart in you click in any product or making click
                            in the icon with shape of cart on the right top, later, a menu will be displayed, where you can see an option call 
                            Cart and if you make click in this option, you will can see your cart. </p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="question-box" onClick={() => question_3 === true ? setquestion_3(false) : setquestion_3(true)} >
                            <p className="question" onClick={() => question_3 === true ? setquestion_3(false) : setquestion_3(true)} >How many units can I buy of a product?</p>
                            <IoIosArrowDown className={question_3 === true ? 'icon icon-active' : 'icon'}/>
                        </div>
                        
                        
                        <div className={question_3 === true ? 'answer-box answer-box-active' : 'answer-box'} >
                            <p className="answer">There's no limit with the amount of units to want to buy, if you make click
                            in more in the amount section you will can write the amout of units you want.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="question-box" onClick={() => question_4 === true ? setquestion_4(false) : setquestion_4(true)} >
                            <p className="question" onClick={() => question_4 === true ? setquestion_4(false) : setquestion_4(true)} >How can I know the total of all products to I want to buy? </p>
                            <IoIosArrowDown className={question_4 === true ? 'icon icon-active' : 'icon'}/>
                        </div>
                        
                        <div className={question_4 === true ? 'answer-box answer-box-active' : 'answer-box'} >
                            <p className="answer">In the cart section you can see the total of all your products or bottom in the manu displayed 
                                making click in the cart icon. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Help;