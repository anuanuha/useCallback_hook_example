//usecallback_hook is almost similar to usememo hook, the problem actually what usecallback hook solve is almost similar to the problem which usecallmemo solves,

import { useEffect } from "react"

//clear difference b/w both of them which is that usememohhok is able to store a value which is memoized from a function into a variable,but in usecallback hook instead of store value returned from function, it will store memoized function itself.
export const Child =({returnComment})=>{
    useEffect(()=>{
        console.log("function is called");
    },[returnComment]);
    return(
        <div>
             {returnComment}
        </div>
    )
}