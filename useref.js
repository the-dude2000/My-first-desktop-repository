import React, { useState, useEffect, useRef } from 'react' // make sure to import useRef hook 

export default function App() {
    const [name, setName] = useState('')
    const renderCount = useRef(1) // connect top and bottom everytime you rerun component this number is counting up /// My name is I rendered 13 times for example. search bar 
    const inputRef = useRef()

// previous state stuff go back! learn useRef in 11 mins
   
// over and over NO we can change this render count.current as much as we want  ans many times as we want and will never cause component to re render since it
// Since its completely separate from our component render cycle state re renders with ref you can store a previous value in it and it persists between different renders                        useEffect(() => {                    renderCount.current = renderCount.current + 1    })  
           

    function focus() {
    inputRef.current.focus() // current gets current property of inputRef and stuff maybe too ////
    } // inputRef.current.value = 'Some value' click updste value but no update state no change // console input value there when you click focus  and focus immediately gets put inside the textbox to start typing 
// always do all your management through reactState  or reactProps //// instead of manually setting these values be careful handle with react and the actual JSX no refs in this field ////
    return (
        <>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name}</div>
        <button onClick={focus}>Focus</button>
        
        </>
    )
}

// ref does not cause your component to re update when it gets changed       <div>I rendered {renderCount.current} times</div>