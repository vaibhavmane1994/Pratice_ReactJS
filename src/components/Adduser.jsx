import React,{useContext,useState} from 'react'
import { GlobalContext } from './GlobalState'
import { Link,useHistory } from 'react-router-dom';
import  {v4 as uuid} from 'uuid';
import{
Form,
FormGroup,
Label,
Input,
Button
}from 'reactstrap';

export const Adduser = () => {
    const [name,setname]=usestate('');
    const {users,addUser} = useContext(GlobalContext)
    const history= useHistory();
    const onSubmit = ()=>{
        const newUser ={
              id:uuid(),
              name
        }
          addUser(newUser);
        history.push('/');

       const onChange=(e)=>{
           setName(e.target.value);

       }
    }
    return (
        <Form onSubmit={onsubmit}>
            <FormGroup>
                <Label> job Discription</Label>
                <Input type ='text'name="name" value={name} onChange={onChange} placeholder="Enter job description"></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to ="/" className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}
