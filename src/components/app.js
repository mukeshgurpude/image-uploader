import { h } from 'preact';
import { useEffect, useReducer, useState } from 'preact/hooks'
import Wrapper from './wrapper'
import Uploader from './uploader'
import Loader from './loader'
import Success from './success'

const reducer = (state, action) => {
	switch(action.type) {
		case 'toggle':
			return {...state, theme: state.theme === 'dark' ? 'light' : 'dark'};
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

function getCurrentTheme() {
	if (typeof window !== "undefined") { 
		return localStorage.getItem('theme') || 'light'
	}
	return 'light'
}

const App = () => {
	const [state, setState] = useReducer(reducer, {
		pos: 0, img: '',
		url: '', theme: getCurrentTheme()
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem('theme', state.theme)
			document.documentElement.setAttribute('data-theme', state.theme)
		}
	}, [state.theme]);

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
