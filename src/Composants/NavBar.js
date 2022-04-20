import React from 'react';
import {Link} from 'react-router-dom';

function NavBar () {
  return (
        <div className='container'>


        <nav className="nav flex-column">
            <Link className="nav-link active"  to='/Home'>Home</Link>
            <Link className="nav-link" to='/AddPlayer'  >Ajouter des Jouers</Link>
            <Link className="nav-link" to='/PlayerList' >Liste des Jouers</Link>
             <Link className="nav-link" to='/PageNotFound' >Page Not Found</Link>
        </nav>

           
        </div>
        
    
  )
}
export default NavBar ;