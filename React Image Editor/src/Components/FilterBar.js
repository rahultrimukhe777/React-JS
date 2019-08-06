import React from 'react';

const FilterBar = (props) => {
    return (
        <div className="FilterBar">
          <h3>Filters</h3>
          <img className="TestFilter" src={props.image} />
          <img className="TestFilter" src={props.image} />
          <img className="TestFilter" src={props.image} />
          <img className="TestFilter" src={props.image} />
        </div>
    );
}

export default FilterBar;