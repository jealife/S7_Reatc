import React from 'react';

function Fields (props) {
  return (
        <div className="form-group">
            <label  htmlFor={props.name}>{props.label}</label>
            <input 
            type={props.type} 
            name={props.name} 
            className="form-control" 
            defaultValue={props.value}
            onChange={props.changeFunc} />
        </div>
    
  )
}
export default Fields ;