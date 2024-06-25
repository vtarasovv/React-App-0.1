import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='content'>
				<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LUPRr1FNJNs0QRcrJTlp6sOASsLDbSeE_g&s" alt="" />
				</div>
				<div> ava + descr</div>
				<div>My posts
					<div>new post</div>
					<div>Post1</div>
					<div>Post2</div>
				</div>
			</div>
		</div>
	);
}

export default App;
