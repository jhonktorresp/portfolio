import React, { Component } from 'react';

class MenuTop extends Component {
		
	state={

	}
	
	render(){
	  return (
			<div className='d-table mx-auto'>
				<span className='menuButtonOn mr-4'>Home</span>
				<span className='menuButton mr-4'>Portfolio</span>
				<span className='menuButton'>Contact</span>
			</div>
		);
	}
}



export default MenuTop;