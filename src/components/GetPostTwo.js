import React, {useReducer, useEffect} from 'react'

const initialState = {
	loading: true,
	error: '',
	post: {}
}

const reducer = (state, action) => {
	switch(action.type){
		case 'SUCCESS':
			return {
				loading: false,
				post: action.result,
				error: ''
			}
		case 'ERROR': 
			return {
				loading: false,
				post: {},
				error: "There was a problem!"
			}
		default: 
			return state
	}
}

export default function GetPostTwo() {
	const [state, despatch] = useReducer(reducer, initialState)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
		      .then(response => response.json())
		      .then((data) => {
		      	despatch({type: 'SUCCESS', result: data})
		      })
		      .catch(() => {
		      	despatch(({type: 'ERROR'}))
		      })
	},[])

	return (
		<>
			{state.loading ? 'Loading' : state.post.title}
			{state.error || null}
		</>
	)
}