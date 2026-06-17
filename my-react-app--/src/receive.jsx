import { useContext } from "react";
import UserContext from "./assets/context.js";
function Shero() 
{
const shinchan =useContext(UserContext);
return (
<h1>{shinchan}</h1>
);
}
export default Shero;