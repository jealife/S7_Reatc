import React, { Component } from 'react';
import {Consumer} from '../context' //pour consomer la date du contexte on doit importer le consumer

 class Player extends Component {
   /* fonction qui recuper l'id de l'element a supprimer avec le dispatch*/
  rmvPlayer = (id,dispatch) => {
    dispatch(
      {
        type : 'DELETE',
        arg : id
      }
    )
  }
   
  render() {
    const {id,nom,email,tel} = this.props.dataBase;
    return (
      <Consumer>
    { value =>  
      {   
        const {dispatch} = value;
            return (
              <div>
                <ul className="list-group">
                  <li className="list-group-item">{nom}</li>
                  <li className="list-group-item list-group-item-primary">{email}</li>
                  <li className="list-group-item list-group-item-secondary">{tel}</li>
                </ul>
                <button onClick={this.rmvPlayer.bind(this,id,dispatch)} /*2*/>Cacher le joueur {nom} </button>
                    </div>
            )
      }
     }
    </Consumer>
    )};
}

export default Player