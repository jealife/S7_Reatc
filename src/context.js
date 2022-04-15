import React, { Component } from 'react';

const Context  = React.createContext();//creation du contexte methode 
// reducer action pour manipuler la data qui se trouve dans mon contexte 
const reducer = (state,action) => {
  switch(action.type){
    case 'DELETE':// action de suppression du joueur 
      return {
        ...state,
        listPlayers : state.listPlayers.filter((player)=> player.id !== action.arg)
      }
      default: // si on a pas d'action on retourne par defaut la data de state
        return state;
  };

}

export default class SAJA extends Component {
    state = {
        listPlayers : [
            {id: 1, nom : "Sadio Mane",email : "hakimi@gmail,com"  , tel :"0679044545"},
            {id: 2, nom : "Ennsyri Yussef",email : "Ennsyri@gmail,com"  , tel :"0690442345"},
            {id: 3, nom : "Soufiane Boufal",email : "Boufal@gmail,com"  , tel :"00220442345"},
            {id: 4, nom : "Bono ",email : "Boufal@gmail,com"  , tel :"00220442345"}
        ],
          // on fait la mise a jour du state avec la method reducer 
          dispatch : action => this.setState(state =>reducer(state,action))
        }
  render() {
    return (
        <Context.Provider value={this.state} >
         {this.props.children}{/*on peut passer aussi plusieur attribut dans le contexte*/}
       </Context.Provider>
    )
   
  }
}
export const Consumer = Context.Consumer;{/*exporter consumer pour l'utiliser dans les autres composants*/}