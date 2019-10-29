import React, { Component } from 'react';

class Portfolio extends Component {
		
	state={
		nowIdiom:this.props.nowIdiom,
		nowProject:this.props.nowProject,
		nowSource:this.props.nowSource,
		nowActive:this.props.nowActive,
		nowPoint:1,
		nowChangeProject:this.props.nowChangeProject
	}
	
	static getDerivedStateFromProps(props, state) {

		if(props.nowIdiom.profile.p1.title !== state.nowIdiom.profile.p1.title){
			
		  return {
			nowIdiom:props.nowIdiom
		  };	

		}else if(props.nowProject !== state.nowProject){		
		  return {
			nowProject:props.nowProject,
			nowSource:props.nowSource
		  };	
		  
		}else if(props.nowActive !== state.nowActive){		
		  return {
			nowActive:props.nowActive
		  };	
		  
		}

		return null;
	}		
	
	activeValue(value){
		
		if(value==='controls'){
			return 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'
		}else{
			return ''
		}
		
	}

	activeStyle(value){
		
		if(value!=='controls'){
			return {opacity:'0',height:'70vh',maxHeight:'70vh',maxWidth:'0px',width:'0px',visibility:'hidden',overflow:'hidden'}
		}else{
			return {}
		}
		
	}
	
	
	makeOneThumb(source,nowProject,pointer){
			
		const cls = Number(nowProject)===Number(pointer) ? 'thumbnailActive' : 'thumbnailInactive';

		return <img alt='' width='100%' height='100%' src={this.getMedia(source)} className={'col-5 mr-1 ml-1 '+cls} key={source} onClick={() => this.props.handler(pointer)} />


	}
	
	getMedia(source){
		

		//Osv
		if(source.indexOf("osv")>-1){
			return require('./../../sources/osv/img/thumbnail.png')
		}			
	
		if(source.indexOf("snake")>-1){
			return require('./../../sources/snake/img/thumbnail.png')
		}			
	
		if(source.indexOf("see")>-1){
			return require('./../../sources/see/img/thumbnail.png')
		}				
	
		if(source.indexOf("wonder")>-1){
			return require('./../../sources/wonder/img/thumbnail.png')
		}				
	
	
	}
	makeThumbs(nowPoint,nowProject){
		var total = []
		for(var i=nowPoint;i<nowPoint+2;i++){
			
			if(this.state.nowIdiom.projects[i]!==undefined){
				
				total.push(this.makeOneThumb(this.state.nowIdiom.projects[i].thumbnail,nowProject,i))
				
			}
		}
		
		return React.createElement('div',{},total);
	}
	
	nextMedia2 = () => {
		
		if(this.state.nowIdiom.projects[this.state.nowPoint+2] !== undefined){
			this.setState({
				nowPoint:Number(this.state.nowPoint)+1
			})
		}

	}

	prevMedia2 = () => {
		
		if(this.state.nowIdiom.projects[this.state.nowPoint-1] !== undefined){
			this.setState({
				nowPoint:Number(this.state.nowPoint)-1
			})
		}

	}
	
	render(){
	  return (
		<div className={'transitionClass '+this.activeValue(this.state.nowActive)} style={this.activeStyle(this.state.nowActive)}>
					
			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 titleThree text-center"><b>{this.state.nowIdiom.controls.title}</b></div>
				<div className="col-2"></div>				
			</div>
			

			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className="col-12 titleThree text-center">
					{this.makeThumbs(this.state.nowPoint,this.state.nowProject)}
				</div>
			</div>
			<div className='row'>
				<div className="col-6 text-right">
					<button onClick={this.prevMedia2} className="btn btn-primary mt-2"> {'<<'} </button>
				</div>
				<div className="col-6 text-left">
					<button onClick={this.nextMedia2} className="btn btn-primary mt-2"> {'>>'} </button>
				</div>
			</div>
			





			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className="col-1"></div>			
				<div className="col-10 contentList text-left" dangerouslySetInnerHTML={{ __html: this.state.nowIdiom.projects[this.state.nowProject].desc }}>

				</div>
				<div className="col-1"></div>			
				
			</div>
			
		</div>
		);
	}
}



export default Portfolio;