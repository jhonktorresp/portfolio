import React, { Component } from 'react';

class Profile extends Component {
		
	state={
		nowIdiom:this.props.nowIdiom,
		nowActive:this.props.nowActive,
	}
	
	
	
	
	static getDerivedStateFromProps(props, state) {

		if(props.nowIdiom.profile.p1.title !== state.nowIdiom.profile.p1.title){
			
		  return {
			nowIdiom:props.nowIdiom
		  };	

		}

		if(props.nowActive !== state.nowActive){
			
		  return {
			nowActive:props.nowActive
		  };	

		}

		return null;
	}	
	
	
	activeValue(value){
		
		if(value==='profile'){
			return 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'
		}else{
			return ''
		}
		
	}

	activeStyle(value){
		
		if(value!=='profile'){
			return {opacity:'0',height:'70vh',maxHeight:'70vh',maxWidth:'0px',width:'0px',visibility:'hidden',overflow:'hidden'}
		}else{
			return {}
		}
		
	}

	render(){
	  return (
		<div className={'transitionClass '+this.activeValue(this.state.nowActive)} style={this.activeStyle(this.state.nowActive)}>
				
			
			<div className='row'>
				<div className='flex-fill'></div>
				<div>
					<div className='titleOne align-bottom text-center'><b>{this.state.nowIdiom.profile.p1.title}</b></div>
					<div className='titleTwo text-right'>
					
						<a href="./cv.pdf">{this.state.nowIdiom.profile.p1.subtitle}</a>
						
					</div>
				</div>
				<div className='flex-fill'></div>
			</div>
			
			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className='col-1'></div>
				<div className='col-10'>
					<div className='titleThree'><b>{this.state.nowIdiom.profile.p2.title}</b></div>
					<div className='contentOne pl-3'>
					
					{this.state.nowIdiom.profile.p2.content}
					</div>
				</div>
				<div className='col-1'></div>
			</div>		
		
		
	
			<div className="supMarginContent" ></div>			
			<div className='row'>
				<div className='col-1'></div>
				<div className='col-10'>
				
		
					<div className='titleThree '><b>{this.state.nowIdiom.profile.p3.title}</b></div>
							<div className="supMarginContentHalf" ></div>	
			
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contentOne text-center'>
						
							<div><b><i>{this.state.nowIdiom.profile.p3.subtitle1}</i></b></div>
							<div className='row pl-3'>
								<div className='col-6 contentList text-center'>
									Python
								</div>
								<div className='col-6 contentList text-center'>
									Django
								</div>
							</div>
							

							<div className='row pl-3'>
								<div className='col-6 contentList text-center'>
									PHP
								</div>
								<div className='col-6 contentList text-center'>
									HTML
								</div>
							</div>		



							<div className='row pl-3'>
								<div className='col-6 contentList text-center'>
									JavaScript
								</div>
								<div className='col-6 contentList text-center'>
									CSS
								</div>
							</div>
							
						</div>
						
						<div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contentOne text-center'>
						
							<div className='pl-3'><b><i>{this.state.nowIdiom.profile.p3.subtitle2}</i></b></div>
							<div className='row pl-3'>
								<div className='col-4 contentList text-center'>
									C
								</div>
								<div className='col-4 contentList text-center'>
									Bootstrap
								</div>
								<div className='col-4 contentList text-center'>
									MatplotLib
								</div>
							</div>
							
							<div className='row pl-3'>
								<div className='col-4 contentList text-center'>
									C#
								</div>
								<div className='col-4 contentList text-center'>
									React.js
								</div>
								<div className='col-4 contentList text-center'>
									Pandas
								</div>
							</div>
							
							<div className='row pl-3'>
								<div className='col-4 contentList text-center'>
									SQL
								</div>
								<div className='col-4 contentList text-center'>
									SASS
								</div>
								<div className='col-4 contentList text-center'>
									Sklearn
								</div>
							</div>
							
						</div>
					</div>
					
	
				<div className="supMarginContentHalf" ></div>	
			
					<div className='row'>
						<div className='col-12 contentOne text-center'>
							<div><b><i>{this.state.nowIdiom.profile.p3.subtitle3}</i></b></div>
						</div>
					</div>
	
					<div className='row'>
						<div className='col-12 contentList text-center'>
							<div>Linux Distros - Git- SCRUM</div>
						</div>
					</div>
		
	
	
				</div>
				<div className='col-1'></div>
			</div>		

			<div className='row'>
				<div className='col-1'></div>
				<div className='col-10'>
				
		
					<div className='titleThree'><b>{this.state.nowIdiom.profile.p4.title}</b></div>
				
					<div className='row pl-3'>
						<div className='col-6 contentOne'>{this.state.nowIdiom.profile.p4.item1}</div>
						<div className='col-6 contentOne'>{this.state.nowIdiom.profile.p4.item2}</div>
					</div>
					
				
					<div className='row pl-3'>
						<div className='col-6 contentOne'>{this.state.nowIdiom.profile.p4.item3}</div>
						<div className='col-6 contentOne'>{this.state.nowIdiom.profile.p4.item4}</div>
					</div>
					   
				</div>
				<div className='col-1'></div>
			</div>				
			
		</div>



		
		);
	}
}



export default Profile;