
import './App.css'

import Counter from './couonter';
import Team from './team';
// import Users from './user';
function App() {
function hundleClick(){
  alert('button clicked');
}
const addFive =(num)=>{
  alert(num+5);
}

  return (
    <>
      <h2>React Core concept</h2>
{/* <Users></Users> */}
<Team></Team>

      <Counter></Counter>
    <button onClick={hundleClick}>click me</button>
    <button onClick={()=>addFive(4)}>add five</button>
    </>
  )
}

export default App
