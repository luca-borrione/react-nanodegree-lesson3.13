import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	state = {
		text: ''
	};

	updateText = event => {
		this.setState({
			text: event.target.value
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<div className="container">
					<input
						type="text"
						placeholder="Say Something"
						onChange={this.updateText}
					/>
					{this.state.text.length > 0 && (
						<div>
							<p className="echo">Echo:</p>
							<p>{this.state.text}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default App;
