import { h } from 'preact';
import { useReducer } from 'preact/hooks'
import Wrapper from './wrapper'
import Uploader from './uploader'
import Loader from './loader'
import Success from './success'

const reducer = (state, action) => {
	console.log(action, state)
	switch(action.type) {
		case 'upload':
			return {...state, pos: 0}
		case 'uploading':
			return {...state, pos: 1}
		case 'success':
			return {...state, pos: 2, img: URL.createObjectURL(action.data)}
		default:
			return state
	}
}

const App = () => {
	const [state, setState] = useReducer(reducer, {pos: 2, img: '', url: ''});
	return <div id="app">
			<Wrapper dispatch={setState} state={state}>
			{
				state.pos == 0 ? <Uploader />
				: (state.pos == 1 ? <Loader /> : <Success />)
			}
			</Wrapper>
		</div>
}

export default App;
