import {useReducer} from 'react'
const initialState = {
	counter: 0,
	counter2: 0
};
const ruducer = (state, action) => {
	switch(action.type){
		case 'increment1':
			return {...state, counter: state.counter + action.value};
		case 'decrement1':
			return {...state, counter: state.counter - action.value};
		case 'increment2':
			return {...state, counter2: state.counter2 + action.value};
		case 'decrement2':
			return {...state, counter2: state.counter2 - action.value};
		default:
			return state;
	}
}
function ComplexCounter(){
	const [count, dispatch] = useReducer(ruducer, initialState)
	return (
		<>
			<div>
				<p>Count - {count.counter}</p>
				<button type="button" onClick={() => dispatch({
					type: 'increment1',
					value: 1
				})}>Increment By 1</button>
				<button type="button" onClick={() => dispatch({
					type: 'decrement1',
					value: 1
				})}>Decrement By 1</button>
			</div>
			<div>
				<p>Count - {count.counter2}</p>
				<button type="button" onClick={() => dispatch({
					type: 'increment2',
					value: 1
				})}>Increment By 1</button>
				<button type="button" onClick={() => dispatch({
					type: 'decrement2',
					value: 1
				})}>Decrement By 1</button>
			</div>
		</>
	)
}

export default ComplexCounter;