import { h } from 'preact';
import { useState } from 'preact/hooks'
import Wrapper from './wrapper'
import Uploader from './uploader'
import Loader from './loader'
import Success from './success'

const App = () => {
	const [state, setState] = useState(1);
	return <div id="app">
			<Wrapper>
			{
				state == 0 ? <Uploader onUpload={() => setState(1)} />
				: (state == 1 ? <Loader /> : <Success />)
			}
			</Wrapper>
		</div>
}

export default App;
