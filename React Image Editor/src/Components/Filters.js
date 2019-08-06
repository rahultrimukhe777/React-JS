import React from 'react';

const Filters = (props) => {
    return (
      <form>
          <h3>{props.Name}</h3>
          <input 
              type="range" 
              name={props.Name} 
              value={props.Value} 
              min={props.Min} 
              max={props.Max} 
              onChange={props.ChangeRange} 
              step={ props.RangeStep && props.RangeStep }
          />          
          <input 
              type="number" 
              name={props.Name} 
              value={props.Value} 
              onChange={props.ChangeRange} 
              step = { props.NumberStep && props.NumberStep }
          />
      </form>
    );
}


export default Filters;