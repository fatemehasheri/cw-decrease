import React,{useState}from 'react';

const Whithconter = (Component) => {
    return function Whithconterclock({props}) {
        const [count,setCount] =useState(1000);
        function decrease(){
            setCount(count-1)
        }
        return <Component decrease={decrease} count={count} {...props}/>
    }
    
}

export default Whithconter;
