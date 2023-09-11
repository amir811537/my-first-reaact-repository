import { useState } from "react"

export default function Team (){
    const [team,setTeam]=useState(20);
    const handleAdd=()=>{
     const newTeam =team+1;
      setTeam(newTeam)

    }
    const handleRemove =()=>{
        const newPlayer =team-1;
        setTeam(newPlayer)
    }
    const teamStyle ={
        border:'2px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>

            <h3>player:{team}</h3>
            <button onClick={handleAdd}>add players</button>
       <button onClick={handleRemove}>remove</button>
        </div>
    )
}