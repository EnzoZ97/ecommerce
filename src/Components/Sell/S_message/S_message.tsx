import './S_message.scss';

type message ={
    activeMessage : Boolean
    activeErrorMessage: Boolean
}

const S_message = ( { activeMessage, activeErrorMessage } : message )  => {
    return (
        <div className="S_message">
            {
                activeMessage === true ?
                <p className='response_ok'>Your product has been added</p>
                : ''
            }
            {
                activeErrorMessage === true ?
                <p className='response_error'>You must filled out the whole form</p>
                : ''
            }
        </div>
        
    )
}

export default S_message;