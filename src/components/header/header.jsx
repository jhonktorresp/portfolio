import React, { Component } from 'react';

import Name from './name';
import Content from './../content/content';


class Header extends Component {
		
	esData = this.props.es;
	enData = this.props.en;
		
	state={
		nowIdiom: this.initialIdiom(),
		nowActive: 'profile'
	}
	
	initialIdiom(){
		
		if(navigator.language.indexOf('es')!==-1 || navigator.userLanguage==='es-419'){
			return this.esData;
		}
		
		return this.enData;
	}
	
	changeIdiom(value){
		
		if(value==='en'){
			this.setState({
				nowIdiom: this.enData,
			});
		}else{
			this.setState({
				nowIdiom: this.esData,
			});		
		}

    }
	
	changeStatus(value){
		
		if(value==='profile' || value==='controls' || value==='contact'){
			this.setState({
				nowActive:value
			})
		}

	}
	
	activeButton(value){
		if(value===this.state.nowActive){
			return 'menuButtonOn';
		}else{
			return 'menuButton';
		}
	}
	
	render(){
	  return (
	<div className='container-fluid'>
	
		<div className="supMargin" ></div>	
		<React.Fragment>
		
			<div className='row'>
			
			
				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
				
					<div className='row ligthBorder'>

						<div className='col-3' ></div>
						<div className='col-6 maxHMenu' ></div>
						<div className='col-3' ></div>

							
					</div>						
				
						<div className='row'>
						<div className='flex-fill' ></div>
						<div>
							<Name></Name>
						</div>
						<div className='flex-fill' ></div>
					</div>					
							
				
				
				</div>
			
				<div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>

					<div className='row ligthBorder d-none d-sm-none d-sm-none d-md-none d-lg-none d-xl-flex'>
						<div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-4' ></div>
						<div className='col-6 maxHMenu' >
							<div className='d-table mx-auto'>
								<span className={'profile' === this.state.nowActive ? 'menuButtonOn mr-4' : 'menuButton mr-4'} onClick={()=>this.changeStatus('profile')} >{this.state.nowIdiom.header.top.opt1}</span>
								<span className={'controls' === this.state.nowActive ? 'menuButtonOn mr-4' : 'menuButton mr-4'} onClick={()=>this.changeStatus('controls')} >{this.state.nowIdiom.header.top.opt2}</span>
								<span className={'contact' === this.state.nowActive ? 'menuButtonOn' : 'menuButton'} onClick={()=>this.changeStatus('contact')}  >{this.state.nowIdiom.header.top.opt3}</span>
							</div>
						</div>
						<div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2' ></div>
					</div>				
				
					<div className='row'>
						<div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-4' ></div>
						<div className='col-6' >
							<div className='d-table mx-auto minusOne'>
								<span onClick={()=>this.changeIdiom('es')} className='menuButtonBot mr-4'>{this.state.nowIdiom.header.bot.idiom1}</span>
								<span onClick={()=>this.changeIdiom('en')}  className='menuButtonBot mr-4'>{this.state.nowIdiom.header.bot.idiom2}</span>
							</div>
						</div>
						<div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2' ></div>
					</div>					
				
				
				</div>		
			
				
			</div>		
			
			
			
			<Content nowDesign={this.state.nowDesign} nowIdiom={this.state.nowIdiom} nowActive={this.state.nowActive}></Content>
			
			
			
		</React.Fragment>


	</div>		
		
		);
	}
}



export default Header;