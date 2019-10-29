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
		nowSource:1,
		nowDesign:this.props.nowDesign
	}
	
			
	setTypeDesign = () => {
		const lg = 1200;
		var value = window.innerWidth;
		
		if(value>=lg && this.state.nowDesign!=='desktop'){
			this.setState({
				nowDesign: 'desktop',
			});	
		}else if(value<lg && this.state.nowDesign!=='mobile'){
			this.setState({
				nowDesign: 'mobile',
			});				
		}
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
	  this.setTypeDesign();
	  window.onresize = this.setTypeDesign;
	}

	componentDidUpdate() {

		if(this.state.nowActive==='controls'){
			this.clearInter();
		}else{
			this.clearInter();
			this.initInterval();
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
			
				<Profile nowDesign={this.state.nowDesign} nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Profile>
				<Portfolio nowDesign={this.state.nowDesign} nowProject={this.state.nowProject} nowSource={this.state.nowSource} nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Portfolio>
				<Controls nowDesign={this.state.nowDesign} handler={this.handler} nowProject={this.state.nowProject} nowSource={this.state.nowSource} nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Controls>
				<Contact nowDesign={this.state.nowDesign} nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Contact>
				
			</div>
		</div>


	</div>		
		
		);
	}
}



export default Content;