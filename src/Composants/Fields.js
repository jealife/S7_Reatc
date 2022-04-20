import React from 'react';
import classnames from 'classnames';

function Fields (props) {
  return (
        <div className="form-group">
            <label  htmlFor={props.name}>{props.label}</label>
            <input 
            type={props.type} 
            name={props.name} 
            className={classnames('form-control',
            {'is-invalid':props.erreur})}
            defaultValue={props.value}
            onChange={props.changeFunc} />
            <div className='invalid-feedback'>
              {props.erreur}
            </div>
        </div>
    
  )
}
export default Fields ;