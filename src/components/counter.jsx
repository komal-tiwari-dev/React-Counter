import React from "react"

let Counter =({count1})=>{
    const [count, setCount]=React.useState(count1);
    let color=count%2===0 ? 'green':'red'
    return (
        <div>
            <h1 className={color}>Counter Game :{count} </h1>
            <button onClick={()=>{setCount(count+1)}}>Increase</button>
            <button onClick={()=>{count>0?setCount(count-1):setCount(0)}}>Decrease</button>
            <button onClick={()=>{setCount(count*2)}}>Double</button>
            <button onClick={()=>{setCount(count/2)}}>Half</button>
        </div>
    )
}

export {Counter}
