import { h } from 'preact';
import { useReducer } from 'preact/hooks'
import Wrapper from './wrapper'
import Uploader from './uploader'
import Loader from './loader'
import Success from './success'

const reducer = (state, action) => {
	switch(action.type) {
		case 'upload':
			return {...state, pos: 0}
		case 'uploading':
			return {...state, pos: 1}
		case 'success':
			return {...state, pos: 2, img: URL.createObjectURL(action.image), url: action.url}
		default:
			return state
	}
}

const App = () => {
	const [state, setState] = useReducer(reducer, {pos: 0, img: '', url: ''});
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
