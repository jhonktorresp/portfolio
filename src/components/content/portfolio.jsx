import React, { Component } from 'react';



class Portfolio extends Component {
		
	state={
		nowIdiom:this.props.nowIdiom,
		nowProject:this.props.nowProject,
		nowSource:this.props.nowSource,
		nowActive:this.props.nowActive,
		nowDesign:this.props.nowDesign
	}
	
	static getDerivedStateFromProps(props, state) {

		var changed = false;
		var changing = {}

		if(props.nowIdiom.profile.p1.title !== state.nowIdiom.profile.p1.title){
		   
		   changed = true;
		   changing.nowIdiom = props.nowIdiom;

		}
	
		if(props.nowProject !== state.nowProject){
		    changed = true;			
			changing.nowProject= props.nowProject;
			changing.nowSource = props.nowSource;
		}
	
		if(props.nowActive !== state.nowActive){
		    changed = true;			
			changing.nowActive = props.nowActive;
		}
		
		if(props.nowDesign !== state.nowDesign){		
			changed = true;		
			changing.nowDesign = props.nowDesign;
		  
		}
		
		if(changed){
			return changing;
		}

		return null;
	}		
	
	getMedia(source){
		

		//Osv
		if(source.value.indexOf("osv/img/s1.png")>-1){
			return require('./../../sources/osv/img/s1.png')
		}			
		if(source.value.indexOf("osv/img/s2.png")>-1){
			return require('./../../sources/osv/img/s2.png')
		}			
		if(source.value.indexOf("osv/img/s3.png")>-1){
			return require('./../../sources/osv/img/s3.png')
		}			

		if(source.value.indexOf("osv/img/s4.png")>-1){
			return require('./../../sources/osv/img/s4.png')
		}			

		if(source.value.indexOf("osv/img/s5.png")>-1){
			return require('./../../sources/osv/img/s5.png')
		}			
		
		if(source.value.indexOf("osv/img/s6.png")>-1){
			return require('./../../sources/osv/img/s6.png')
		}			

		if(source.value.indexOf("osv")>-1){
			return require('./../../sources/osv/vid/v1.mp4')
		}
				
		if(source.value.indexOf("see")>-1){
			return require('./../../sources/see/vid/v1.mp4')
		}		
		if(source.value.indexOf("wonder")>-1){
			return require('./../../sources/wonder/vid/v1.mp4')
		}			
		if(source.value.indexOf("snake/vid/vid1.mp4")>-1){
			return require('./../../sources/snake/vid/vid1.mp4')
		}		
		if(source.value.indexOf("snake/vid/vid2.mp4")>-1){
			return require('./../../sources/snake/vid/vid2.mp4')
		}	
		if(source.value.indexOf("snake/vid/vid3.mp4")>-1){
			return require('./../../sources/snake/vid/vid3.mp4')
		}	
		if(source.value.indexOf("snake/vid/vid4.mp4")>-1){
			return require('./../../sources/snake/vid/vid4.mp4')
		}					

		
	}
	
	generateMedia(source){
		
		if(source!==undefined){
			if(source.type==="v"){
				return <video key={source.value} width="100%" height="100%" controls autoPlay><source src={this.getMedia(source)} type="video/mp4" /></video>;
			}else{
				return <img alt='' width="100%" height="100%" src={this.getMedia(source)} />;
			}
		}
		
		return <div></div>
	}


	nextMedia = () => {
		
		if(this.state.nowIdiom.projects[this.state.nowProject].sources[Number(this.state.nowSource)+1] !== undefined){
			this.setState({
				nowSource:Number(this.state.nowSource)+1
			})
		}

	}

	activeStyle(design){
		
		if(design==='mobile'){
			return {background:'whitesmoke',marginTop:'30px',marginBottom:'30px'}
		}else{
			return {}
		}
		
	}


	prevMedia = () => {
		
		if(this.state.nowIdiom.projects[this.state.nowProject].sources[Number(this.state.nowSource)-1] !== undefined){
			this.setState({
				nowSource:Number(this.state.nowSource)-1
			})
		}

	}

	render(){
	  return (
		<div className='transitionClass col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6' style={this.activeStyle(this.state.nowDesign)}>
					
			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 titleThree text-right"><b>{this.state.nowIdiom.portfolio.title}</b></div>
				<div className="col-2"></div>				
			</div>
	
			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 galleryContainer p-0">

			<div className='row position-absolute w-100 h-100 ml-0 mr-0'>
			
				<div className='buttonGallery h-100 d-table'>
					<div className='d-table-cell align-middle'><span onClick={this.prevMedia} className='spanZ carousel-control-prev-icon position-absolute'>  </span> </div>
				</div>
				<div className='flex-fill'></div>
				<div className='buttonGallery h-100 d-table'>
					<div className='d-table-cell align-middle'><span onClick={this.nextMedia} className= 'spanZ carousel-control-next-icon position-absolute'> </span> </div>
				</div>
			
			</div>
			

					{this.generateMedia(this.state.nowIdiom.projects[this.state.nowProject].sources[this.state.nowSource])}

				
				</div>
				<div className="col-2"></div>				
			</div>			
			
	
			<div className="supMarginContent" ></div>			




			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 titleThree text-center"><b>
					{this.state.nowIdiom.projects[this.state.nowProject].title}
				</b></div>
				<div className="col-2"></div>				
			</div>	

			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 titleFour text-center"><b>

					{this.state.nowIdiom.projects[this.state.nowProject].sources[this.state.nowSource].title}
				</b></div>
				<div className="col-2"></div>				
			</div>		
							<div className="supMarginContentHalf" ></div>				
			<div className='row'>
				<div className="col-2"></div>
	<div className="col-8 contentOne pl-4">{this.state.nowIdiom.projects[this.state.nowProject].sources[this.state.nowSource].desc}</div>
				<div className="col-2"></div>				
			</div>		
			
				<div className="supMarginContent" ></div>			
			
		</div>
		);
	}
}



export default Portfolio;