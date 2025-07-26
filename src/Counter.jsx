import { useState } from "react";
export default function Counter(){
    const[count,setCount]=useState(0);
    const[value,seValue]=useState("");

    function onTextChange(event){
        let v=event.target.value;
        seValue(v)
        console.log(`${v} is long but ${v*8} bit`)
        }
    return(<>
    <input onChange={(event)=>onTextChange(event)}></input><br></br>
    <p>you type {value.length} int It {value.length} long but {value.length*8} bit</p>
    <button onClick={()=>setCount(count-1)}style={{"margin-right":"5px"}}>-</button>
    <button onClick={()=>setCount(0)}>reset</button>
    <button onClick={()=>setCount(count+1)}>+</button>
    <p>You Clicked {count} times</p>
    </>)
}