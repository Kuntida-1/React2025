import { useState, useRef } from "react";
import './Bmi.css';

function BmiText({bmi}){
    if (bmi<18.5){ return (<><img src="skinny.jpg" height={600}/><h1>Underweight</h1> </>);}
    if (bmi>30){ return (<><img src="Over.jpg"height={600} /><h1>Overweight</h1></>);}
    return (<><img src="normal.jfif"height={600} /><h1>Normal</h1></>);
}
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [bmi,setBmi]=useState(0,0);

    function calbmi(){
     let w=parseFloat(w_inputRef.current.value);
     let h=parseFloat(h_inputRef.current.value)/100;
     setBmi(w/(h*h));
}
    return (<> <h1>Bmi Calulator</h1>
    weight:<input ref={w_inputRef}/> kg.<br></br>
    height:<input ref={h_inputRef}/> cm.<br></br>
    <button onClick={()=>calbmi()}>Calculate</button>
    <p>Bmi value: {bmi}</p>
    

    <BmiText bmi={bmi}/>
    </>);
}