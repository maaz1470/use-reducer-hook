import React, {useReducer} from 'react'
// import ComponentA from './components/ComponentA';
import GetPostTwo from './components/GetPostTwo';

export const countContext = React.createContext();

const initialState = 1;
const reducer = (state,action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default: 
      return state;
  }
}


export default function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <p>{count}</p>
      <countContext.Provider value={{ countDispatch: dispatch }}>
        <GetPostTwo />
      </countContext.Provider>
    </>
  )
}