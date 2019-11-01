import React from 'react';
import './css/App.scss';
import Header from './components/header/header';


//import 'bootstrap/dist/css/bootstrap.min.css';

import jsonDataEs from './json/es.json';
import jsonDataEn from './json/en.json';

function App() {
		
	return (
		<React.Fragment>
			<Header  es={jsonDataEs} en={jsonDataEn} ></Header>
		</React.Fragment>
	  );

}

export default App;
