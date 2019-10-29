import React, { Component } from 'react';

import Profile from './profile';
import Portfolio from './portfolio';
import Controls from './controls';
import Contact from './contact';

class Content extends Component {
	

	handler = (someValue) => {

		this.setState({ nowProject: someValue ,nowSource:1})	
    } 

  
	state={
		nowIdiom:this.props.nowIdiom,
		nowProject:this.randomProject(false),
		nowActive:this.props.nowActive,
		nowChangeProject:this.nowChangeProject,
		nowSource:1
	}
	
	
	
	randomProject(state){
		
		var keys,result;
		if(state){
			keys = Object.keys(this.state.nowIdiom.projects);
			result = keys[ keys.length * Math.random() << 0];	
	
		}else{
			keys = Object.keys(this.props.nowIdiom.projects);
			result = keys[ keys.length * Math.random() << 0];	

		}

		return result;
		
	}

	initInterval(){
		//this.interval = setInterval(() => this.setState({ nowProject: this.randomProject(false) ,nowSource:1}), 15000);
	}

	clearInter(){
		//clearInterval(this.interval);
	}

	componentDidMount() {
	  this.initInterval();
	}

	componentDidUpdate() {

		if(this.state.nowActive==='controls'){
			this.clearInter();
		}else{
			this.clearInter();
			this.interval = setInterval(() => this.setState({ nowProject: this.randomProject(false) ,nowSource:1}), 15000);
		}

	}
	
	componentWillUnmount() {
	  this.clearInter();
	}


	static getDerivedStateFromProps(props, state) {

		if(props.nowIdiom.profile.p1.title !== state.nowIdiom.profile.p1.title){
			
		  return {
			nowIdiom:props.nowIdiom
		  };	

		}else if(props.nowActive !== state.nowActive){		
		  
		  return {
			nowActive:props.nowActive
		  };	
		  
		}

		return null;
	}

	render(){
	  return (
	<div className='container-fluid'>
	
		<div className="supMarginContent" ></div>	
		<div className='container-fluid'>
			<div className="row">
			
				<Profile nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Profile>
				<Portfolio nowProject={this.state.nowProject} nowSource={this.state.nowSource} nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Portfolio>
				<Controls handler={this.handler} nowProject={this.state.nowProject} nowSource={this.state.nowSource} nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Controls>
				<Contact nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Contact>
				
			</div>
		</div>


	</div>		
		
		);
	}
}



export default Content;