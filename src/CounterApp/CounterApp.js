import {useDispatch, useSelector} from 'react-redux';
import {increment,decrement,incrementByPayload} from '../reducer/counter';
import './counterApp.css';


const CounterApp = ()=>{
  const dispatch = useDispatch();

  const object = useSelector((state)=>state.counter);
  
  return(
    
  <div className="counterApp">
  <h1>The count is {object.count}</h1>
  <button onClick={()=>dispatch(increment())}>Increment</button>
  <button onClick={()=>dispatch(decrement())}>decrement</button>
  <button onClick={()=>dispatch(incrementByPayload(10))}>incrementByPayload</button>
  increment by 10
    </div>
  )}
  export default CounterApp;
