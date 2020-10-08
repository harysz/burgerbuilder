import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Buger';


class BurgerBuilder extends Component {
//  constructor(props){
//    super(props);
//    this.state={...}
//  }
  state ={
    ingredients :{
      salad:0,
      bacon:0,
      cheese :0,
      meat:0
    }
  }
 
  render (){
     return (
       <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <div>Builder Controls</div>
       </Aux>
     );
 }
}

export default BurgerBuilder;