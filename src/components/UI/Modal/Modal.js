import React from 'react'

import clases from './Modal.css';

const modal =(props)=> {
    return (
        <div className={clases.Modal}
        style ={{
            transform: props.show? 'translateY(0)' : 'translate(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
        >
            {props.children}
        </div>
    )
}
export default modal;