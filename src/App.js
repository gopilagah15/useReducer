import { useReducer } from 'react';
import './App.css';
import Header from './Header';

const reducer = (state, action) =>{
  // console.log({state: state, action: action});
  // console.log('state:', state);
  // console.log('action:', action);
  if(action.type === 'INC'){
    return state+1;
  }
  else if(action.type === 'DEC'){
    return state-1;
  }
  else if(action.type === 'MUL'){
    return state*2;
  }

  return state;
}
function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  
  return (
    <>
    <div className=""style={{width:'100%', height:'100vh'}}>
        <div className="" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
           
        <Header/>
        <h1 style={{display:'flex', justifyContent:'center'}}>{state}</h1>
        <div className=""style={{display:'flex', justifyContent:'space-between'}}>
            <button onClick={()=> dispatch({type:'INC'})}>Increment</button>
            <button onClick={()=> dispatch({type:'DEC'})}>Decrement</button>
            <button onClick={()=> dispatch({type:'MUL'})}>Multiply</button>
            </div>
     </div></div>

    </>
  );
}

export default App;
