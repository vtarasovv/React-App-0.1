import React from 'react';
import './App.css';

const App = () => {
	return (
		<div>
					<Header />
		<div className="App">
			Simpl html
			<ul>
				<li>html</li>
				<li>css</li>
				<li>js</li>
				<li>react</li>
			</ul>
		</div>
		</div>
	);
}

const Header = () => {
	return (
		<div>
			<a href='#'>Header</a>
		</div>
	
	);
}
export default App;
