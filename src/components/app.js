import { h } from 'preact';
import { useState } from 'preact/hooks'
import Wrapper from './wrapper'
import Uploader from './uploader'
import Loader from './loader'
import Success from './success'

const App = () => {
	const [state, setState] = useState(0);
	return <div id="app">
			<Wrapper>
			{
				state == 0 ? <Uploader onUpload={() => setState(1)} />
				: (state == 1 ? <Loader /> : <Success />)
			}
			<button onClick={() => {
				setState(s => s == 2 ? 0 : s + 1);
			}} children='Click to update' />
			</Wrapper>
		</div>
}

export default App;
