import React, { Component } from 'react';

class Portfolio extends Component {
		
	state={
		nowIdiom:this.props.nowIdiom,
		nowProject:this.props.nowProject,
		nowSource:this.props.nowSource,
		nowActive:this.props.nowActive,
		nowPoint:1,
		nowChangeProject:this.props.nowChangeProject,
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
	
	activeValue(value,design){
		
		if((value==='controls' && design==='desktop') || design==='mobile'){
			return 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'
		}else if(design==='mobile'){
			return 'col-12'
		}
		
		
		return '';
		
	}

	activeStyle(value,design){
		
		if(value!=='controls' && design==='desktop'){
			return {opacity:'0',height:'70vh',maxHeight:'70vh',maxWidth:'0px',width:'0px',visibility:'hidden',overflow:'hidden'}
		}else{
			return {}
		}
		
	}
	
	
	makeOneThumb(source,nowProject,pointer){
			
		const cls = Number(nowProject)===Number(pointer) ? 'thumbnailActive' : 'thumbnailInactive';

		return <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 pb-3'><img alt='' width='100%' height='100%' src={this.getMedia(source)} className={'pr-1 pl-1 pt-2 pb-2 '+cls} key={source} onClick={() => this.props.handler(pointer)} /></div>


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
	makeThumbs(nowPoint,nowProject,nowDesign){
		var total = []
		
		var numberThumbs =  nowDesign === 'desktop' ? 3 : 2;
		
		for(var i=nowPoint;i<nowPoint+numberThumbs;i++){
			
			if(this.state.nowIdiom.projects[i]!==undefined){
				
				total.push(this.makeOneThumb(this.state.nowIdiom.projects[i].thumbnail,nowProject,i))
				
			}
		}
		
		return React.createElement('div',{className:'row'},total);
	}
	
	nextMedia2 = () => {
		
		var numberThumbs =  this.state.nowDesign === 'desktop' ? 3 : 2;
		
		if(this.state.nowIdiom.projects[this.state.nowPoint+numberThumbs] !== undefined){
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
		<div className={'transitionClass '+this.activeValue(this.state.nowActive,this.state.nowDesign)} style={this.activeStyle(this.state.nowActive,this.state.nowDesign)}>
					
			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 titleThree text-center"><b>{this.state.nowIdiom.controls.title}</b></div>
				<div className="col-2"></div>				
			</div>
			

			<div className="supMarginContent" ></div>	
			
			<div className='row'>
				<div className="col-12 titleThree text-center">
					{this.makeThumbs(this.state.nowPoint,this.state.nowProject,this.state.nowDesign)}
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
				<div className="col-10 contentList contentBox" dangerouslySetInnerHTML={{ __html: this.state.nowIdiom.projects[this.state.nowProject].desc }}>

				</div>
				<div className="col-1"></div>			
				
			</div>
			
		</div>
		);
	}
}



export default Portfolio;