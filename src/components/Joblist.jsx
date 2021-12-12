import React,{useContext}from 'react'
import { GlobalContext } from './GlobalState'
import { Link } from 'react-router-dom'
import{
    ListGroup,
    ListGroupItem,
    Button

}from 'reactstrap'

export const Joblist = () => {
    const {users,removeUser} = useContext(GlobalContext)
    return (
        <ListGroup className="mt-4">
            {users.length>0?(
              <>
                {users.map(user=>(
                <ListGroupItem className="d-flex">
                <strong>{user.name}</strong>
               <div className="ml-auto">
                <Link className ="btn btn-warning mr-1 "to={'/edit/${user.id}'}>Edit</Link>
                <Button onClick={()=>removeUser(user.id)} color="danger"></Button>

            </div>
            </ListGroupItem>

            ))}
              </>  
            ):(
                <h4 className="text-center">no DATa</h4>
            )}
          
            
            
        </ListGroup>
    )
}
