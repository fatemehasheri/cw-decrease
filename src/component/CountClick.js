import React from 'react';
import Whithconter from './whithConter';

const Countclick = ({decrease,count}) => {
    
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={decrease}>click</button>
        </div>
    );
}

export default Whithconter(Countclick);
