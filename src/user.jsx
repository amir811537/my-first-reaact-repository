import { useEffect, useState } from "react"
import Friend from "./friend";

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>setUsers(data))

    },[]);

    const teamStyle ={
        border:'2px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }

    return(
        <div style={teamStyle}>
<h3>User: {users.length}</h3>
{/* {
    users.map(users=><Friend></Friend>)
} */}

        </div>
    )
}