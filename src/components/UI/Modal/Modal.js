import React from 'react'
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
import clases from './Modal.css';

const modal =(props)=> {
    return (
        <Aux>
           <Backdrop show ={props.show} clicked={props.modalClosed}/>
            <div className={clases.Modal}
                style ={{
                transform: props.show? 'translateY(0)' : 'translate(-100vh)',
                opacity: props.show ? '1' : '0'
                }}
        >
            {props.children}
        </div>
        </Aux>
    )
}
export default modal;