import UserContext from "./assets/context.js";
import Recieve from "./receive.jsx"
function Variant() {
return (
<UserContext.Provider
value="Poojitha">
<Recieve></Recieve>
</UserContext.Provider>
);
}
export default Variant;