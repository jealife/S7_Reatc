import React, { Component } from 'react';
import {Consumer} from '../context'
import Fields from './Fields'

class AddPlayer extends Component {
    state = {
        nom:'',
        email:'',
        tel:'',
       erreurs:{}
    }
    
    
    changeInput = (e) => this.setState({[e.target.name]: e.target.value})

    submit = (dispatch,taille,e) => {
      e.preventDefault(); // stopper l'actualiser de la page
     
     const {nom,email,tel} = this.state;
      if(nom == '') {
        this.setState({erreurs:{nom :'Le champs nom est requis'}})
        console.log("srfsd")
        return;
      }
      if(email == '') {
        this.setState({erreurs:{email :'Email est requis'}})
        return;
      }
      if(tel == '') {
        this.setState({erreurs:{tel :'Tel invalide'}})
        return;
      }

        dispatch({
          type :"ADD_PLAYER",
          payload: {
            id: taille+1,
            nom: this.state.nom,
            email: this.state.email,
            tel :  this.state.tel
          }
          
        })
     this.props.history.push('/PlayerList');
      }

  render() {
      const {nom,email,tel,erreurs} = this.state;
    return(
      <Consumer>
        { value => {

          const { dispatch } = value;
          return(
          <div className='MaForm'>
            <form onSubmit={this.submit.bind(this,dispatch,value.listPlayers.length)}> 
                <h3>Ajouter un joueur</h3>
                <Fields
                  label="Nom"
                  name="nom"
                  type="text"
                  value={nom}
                  changeFunc={this.changeInput}
                  erreur={erreurs.nom}
                />
                
                  <Fields
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  changeFunc={this.changeInput}
                  erreur={erreurs.email}
                />
                  <Fields
                  label="tel"
                  name="tel"
                  type="text"
                  value={tel}
                  changeFunc={this.changeInput}
                  erreur={erreurs.tel}
                />
                <button className="btn btn-secondary" type="submit" aria-label="">Ajouter</button>
            </form>
        </div>
          )
      }
    }
      </Consumer>
    )

  }
}
export default AddPlayer