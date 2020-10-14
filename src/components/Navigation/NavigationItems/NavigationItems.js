import React from 'react'

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems=(props)=> {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active>Burger builder </NavigationItem>
            <NavigationItem link='/'> Chekcout </NavigationItem>
       
        </ul>
    )
}
export default navigationItems;