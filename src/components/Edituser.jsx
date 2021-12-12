import React,{useContext,useState,useEffect} from 'react'
import { GlobalContext } from './GlobalState'
import { Link,useHistory } from 'react-router-dom';

import{
Form,
FormGroup,
Label,
Input,
Button
}from 'reactstrap';
export const Edituser = () => {
    const [selectedUser,setselectedUser]=usestate({
        id:'',
        name:''
    });
    const {users,editUser} = useContext(GlobalContext)
    const history= useHistory();
    const currentUserId = props.match,params.id;

    useEffect(()=>{
         const userId=currentUserId;
         const selectedUser=users.find(user=>user.id===(userId) ,
         setselectedUser(selectedUser)
 
    },[currentUserId,users])
    const onSubmit = ()=>{
        editUser(selectedUser)
      
        }
          addUser(newUser);
        history.push('/');

       const onChange=(e)=>{
           setselectedUser({...selectedUser,[e.target.name]:e.target.value})

       }
    }
    return (
       < Form onSubmit={onsubmit}>
        <FormGroup>
            <Label> job Discription</Label>
            <Input type ='text'value={selectedUser.name} onChange ={onChance}placeholder="Enter job description"></Input>
        </FormGroup>
        <Button type='submit'>Edit</Button>
        <Link to ="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
    )
}
