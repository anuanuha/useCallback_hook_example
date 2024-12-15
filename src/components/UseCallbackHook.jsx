import { useCallback, useState } from "react"
import { Child } from "./Child";

export const UseCallbackHook=()=>{
    const [toggle, settoggle] = useState(false);
    const[data,setData] = useState("pls sunbscribe to the channel");
    const returnComment = useCallback(
        (name)=>{
       return data=name;
          },
         [data]
     );
    return(
        <div>
             <Child returnComment={returnComment}/>
             <button onClick={()=>{
                settoggle(!toggle);
             }}>
                {" "}
                   Toggle
             </button>
             {toggle && <h1>toggle</h1>}
        </div>
    )
}