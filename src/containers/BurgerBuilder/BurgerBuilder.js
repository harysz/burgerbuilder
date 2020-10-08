import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Buger';


class BurgerBuilder extends Component {
 render (){
     return (
       <Aux>
            <Burger/>
            <div>Builder Controls</div>
       </Aux>
     );
 }
}

export default BurgerBuilder;