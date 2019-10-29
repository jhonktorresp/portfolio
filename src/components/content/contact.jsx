import React, { Component } from 'react';

class Contact extends Component {
		
	state={
		nowIdiom:this.props.nowIdiom,
		nowActive:this.props.nowActive,
		message:"",
		email:"",
		sent:false,
		try_sent:false,
		error_1:false,
		error_2:false
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
		
		
	validateEmail(email) {
		var re = /^(([^<>()\\.,;:\s@"]+([^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}	
	
	sendMail = () => {

		const templateId = "portafolio";
		
			var template_params = {
			   "message": this.state.message,
			   "contact": this.state.email
			}
			

		var v1 = this.validateEmail(this.state.email);
		var v2 = this.state.message.length>0;
		
		if( v1 && v2){
			this.sendFeedback(templateId, template_params)
			this.setState({error_1:true,error_2:true})			
		}else{
			if(!v1){
				this.setState({error_1:true})
			}else{
				this.setState({error_1:false})
			}
			
			if(!v2){
				this.setState({error_2:true})
			}	else{
				this.setState({error_2:false})
			}	
			
		}
	}
	
	sendFeedback (templateId, variables) {

		window.emailjs.send(
		'gmail', templateId,
		variables
		).then(res => {
			this.setState({try_sent:true,sent:true});
		})
		// Handle errors here however you like, or use a React error boundary
		.catch(function(){this.setState({try_sent:true,sent:true});})
	  }	
	
	
	activeValue(value){
		
		if(value==='contact'){
			return 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'
		}else{
			return ''
		}
		
	}

	activeStyle(value){

		if(value!=='contact'){
			return {opacity:'0',height:'70vh',maxHeight:'70vh',maxWidth:'0px',width:'0px',visibility:'hidden',overflow:'hidden'}
		}else{
			return {}
		}
		
	}
		
	 handleChange1 = (event) => {

		this.setState({email: event.target.value});
	  }
  
  	 handleChange2 = (event) => { 
		
		this.setState({message: event.target.value});
	  }
	  
    
  
	render(){
	  return (

		<div className={'transitionClass '+this.activeValue(this.state.nowActive)} style={this.activeStyle(this.state.nowActive)}>
				

			<div className="supMarginContent" ></div>					
				
				
			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 titleThree text-right"><b>{this.state.nowIdiom.contact.title}</b></div>
				<div className="col-2"></div>				
			</div>				
	
			<div className='row'>
				<div className="col-2"></div>
				<div className="col-8 titleFour text-right"><b>{this.state.nowIdiom.contact.subtitle}</b></div>
				<div className="col-2"></div>				
			</div>		
			
			<div className="supMarginContent" ></div>	

			<div className="form-group">
			<label>{this.state.nowIdiom.contact.f1_label}</label>
				<input type="email" className="form-control" name='email' placeholder={this.state.nowIdiom.contact.f1_placeholder} onChange={this.handleChange1}/>
			</div>

	
		
					{this.state.error_1 ? <div className='alert alert-warning'>{this.state.nowIdiom.contact.f1_error}</div>  : ""}



			<div className="form-group">
			<label>{this.state.nowIdiom.contact.f2_label}</label>
			  <textarea className="form-control" id="exampleFormControlTextarea3" placeholder={this.state.nowIdiom.contact.f2_placeholder} rows="7" onChange={this.handleChange2}></textarea>
			</div>
			{this.state.error_2 ? <div className='alert alert-warning'>{this.state.nowIdiom.contact.f2_error}</div> : ""}
				
					
			<div className='row'>
				<div className="flex-fill"></div>
				<div className="text-center">
					<button onClick={this.sendMail} className="btn btn-success btn-lg btn-block">{this.state.nowIdiom.contact.send_msg}</button>
				</div>
				<div className="flex-fill"></div>				
			</div>			
			
		
			
			<div className='row'>
				<div className="flex-fill"></div>
				<div className="text-center mt-2">
					{this.state.sent && this.state.try_sent ? this.state.nowIdiom.contact.success_msg : ""}
				</div>
				<div className="flex-fill"></div>				
			</div>		
			
		</div>		
		);
	}
}



export default Contact;