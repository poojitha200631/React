import { useState } from "react";
import App from "./App.jsx"

function Bird()
{
    const[show , setshow]=useState(false);
    return (
        <>
        <button
         onClick={()=>setshow(!show)}
        >Reveal</button>
        {show && <App></App>}
            </>
    );
}
export default Bird;