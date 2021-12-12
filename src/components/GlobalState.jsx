import React,{createContext,useReducer } from react
import AppReducer from "./AppReducer"
import { Children } from "react"

const initialState ={
    user:[ ]
}

export  const GlobalContext = createContext(initialState)

export const GLobalProvider =({children}) =>{
    const[state,dispatch] =useReducer(AppReducer,initialState);

    const removeUser =(id)=>{
        dispatch({
            type:'REMOVE_JOB',
            payload:IDBRequest
        })
    }
   
    const addJob =(user)=>{
        dispatch({
            type:'ADD_JOB',
            payload:user
        })
    }

    const editUser =(user)=>{
        dispatch({
            type:'EDIT_USER',
            payload:user
        })
    }
    return(
        <GlobalContext.Provider value ={{

           users:state.users,
           removeUser :removeUser,
           addJob,
           editUser 

        }}>
            {children}
        </GlobalContext.Provider>
    )

}