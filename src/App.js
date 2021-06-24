import './App.css';
import A from './components/A';
import {createContext} from 'react';

export let AppContext = createContext();

function App() {

	let fn = () => console.log('fn hello');
	let x = 'hello';
	return (
		<div className="App">
			<AppContext.Provider value={{fn, x}}>
				<A/>

			</AppContext.Provider>

		</div>
	);
}

export default App;
