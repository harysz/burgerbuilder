import React from 'react'

import clases from './Modal.css';

const modal =(props)=> {
    return (
        <div className={clases.Modal}>
            {props.children}
        </div>
    )
}
export default modal;