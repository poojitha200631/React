import {useState }from "react";
import App from 
function Fire(){
    const[name,getName]=useState("");
    return (
        <>
        <label>
            name:<input type="text"onChange={(e)=>getName(e.target.value)}/>
        </label>
        <h1>{name}</h1>
        </>

    );
}
function Master()
{
    const [sample , setName]=useState("Travel");
    return(
        <>
        <h1>{sample}</h1>
        <button
            style={{width:"fit-content"}}onClick={()=>setName("Journey")}>Change
        </button>
        </>
    );
}
function Classic()
{
    const [Count,setCount]=useState(0);
    return(
        <>
        <h1>count:{count}</h1>
        <button
            style={{width:"fit-content"}}
            onClick={()=>setCount(count+1)}>count
        </button><br></br>
        <button
            style={{width:"fit-content"}}
            onClick={()=>setCount(count-1)}>count
        </button>
        <Master></Master>
        <br></br>
        <Fire></Fire>
        </>
    );
}
export default Classic;