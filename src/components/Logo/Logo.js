import React from 'react'
import logoImg from '../../assets/burger-logo.png';
import classes from './Logo.css';
const logo=(props)=> {
    return (
        <div className={classes.Logo}>
            <img src={logoImg} alt = 'no logo makes me loco'/>
        </div>
    )
}
export default logo