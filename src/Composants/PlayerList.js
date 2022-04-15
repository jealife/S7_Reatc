import React, { Component } from 'react';
import Player from './Player';
import {Consumer} from '../context'

class PlayerList extends Component {
 
    removePlayersList = (id) => {
      const {listPlayers} = this.state;
      const newData = listPlayers.filter((p)=> p.nom !== id)
      this.setState({
          listPlayers : newData
      }
      )
    } 
  render() {
    return (

   
    <Consumer>
      {
     value=>(
    <div> 
       {value.listPlayers.map((data)=>
        <Player key={data.id}  onrmvPlayers={this.removePlayersList.bind(this,data.id)} dataBase={data}/>
        )} 
    </div>
     )
     }
    </Consumer>
     )
  };
}
export default PlayerList;