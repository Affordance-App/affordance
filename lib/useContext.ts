import {createContext} from 'react';


export interface ContextType{
   value:string;
   setValue:(value:string)=>void;
}

const initialContext:ContextType={
   value:"",
   setValue:()=>{}
}

export const Context = createContext<ContextType>(initialContext);

//export const Context = React.createContext('');