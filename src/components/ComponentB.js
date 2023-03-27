import { useContext } from 'react'
import {countContext} from '../App'
function ComponentB() {

	const counterContext = useContext(countContext)

	return (
		<>
			<p>Component B</p>
			<button type="button" onClick={() => counterContext.countDispatch('increment')}>Increment</button>
			<button type="button" onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
		</>
	)
}

export default ComponentB;