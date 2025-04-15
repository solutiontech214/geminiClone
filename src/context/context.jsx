import { createContext } from "react";
import run from "../config/gemini";

export const Context=createContext();

const ConextProivder=(props)=>{
    const onSent=async(prompt)=>{
       await run(prompt);
    }
    const contextValue={

    }
    onSent("what is react js");

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
)
}
export default ConextProivder;