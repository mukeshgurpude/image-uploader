import { h } from 'preact';
import { useState } from 'preact/hooks'
import Wrapper from './wrapper/wrapper'
import Uploader from './uploader/uploader'
import Loader from './loader/loader'
import Success from './success/success'

const App = () => {
	const [state, setState] = useState(0);
	return <div id="app">
			<Wrapper>
			{
				state == 0 ? <Uploader onUpload={() => setState(1)} />
				: (state == 1 ? <Loader /> : <Success />)
			}
			</Wrapper>
			<button onClick={() => {
				setState(s => s == 2 ? 0 : s + 1);
			}} children='Click to update' />
		</div>
}

export default App;
