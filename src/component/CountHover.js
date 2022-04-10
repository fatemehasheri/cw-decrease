import React from 'react';
import Whithconter from './whithConter';

const CountHover = ({decrease,count}) => {
    
    return (
        <div>
            <h3>{count}</h3>
            <button onMouseOver={decrease}>click</button>
        </div>
    );
}

export default Whithconter(CountHover);