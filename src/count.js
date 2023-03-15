import React,{useState} from 'react';


function Count(){

    const [count,setCount] = useState(0);
    const increaseCount = () =>{
        return setCount(count + 1);
    } 
    const reset = ()=>{
        return setCount(0);
    }
    return(
        <div className='main'>
            <p className='clicks'>Number of clicks : {count}</p>
            {/* <p className='count'>Count : {count}</p> */}
            <button className='btn' onClick={increaseCount}>Click me</button>
            <button className='btn' onClick={reset}>Reset</button>
        </div>
    )
}

export default Count;