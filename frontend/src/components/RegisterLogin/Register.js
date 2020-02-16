import React, { Component } from 'react'

class Register extends Component {
    state={
        name:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        errors:[]
    }   ;
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:
            event.target.value
        });

    }
    render() {
        return (
            <div className='container'>
            <h2>Register Page</h2>
            <div className='row'>
                <form className='col s12' onSubmit={event => this.submitForm(EventSource)}>
                    <div className="row">
                    <div className="input-field col s12">                             
                    <input name='lastname'
                            value={this.state.lastname} onChange={e => this.handleChange(e)} id="lastname" type="text" className="validate" />
                    <label className="active" htmlFor="lastname">
                    LastName
                        
                    </label>
                    <span 
                     className="helper-text"
                     data-error="Type  Correct!"
                     data-success="Right"
                    
                    /> </div>

                                
 </div>
 <div className="row">
     <div className="input-field col s12">
     <input name='name' value={this.state.name} onChange={e => this.handleChange(e)} id="name" type="text" className="validate" />
                    <label className="active" htmlFor="name">
                        Name
                        
                    </label>
                    <span 
                     className="helper-text"
                     data-error="wrong"
                     data-success="right"
                    
                    /> 
     </div>
 </div>
 <div className="row">
     <div className="input-field col s12">
     <input name='password'
                            value={this.state.password} onChange={e => this.handleChange(e)} id="password" type="password" className="validate" />
                    <label className="active" htmlFor="email">
                        Password
                        
                    </label>
                    <span 
                     className="helper-text"
                     data-error="wrong"
                     data-success="right"
                    
                    /> 
     </div>
 </div>
 <div className="row">
     <div className="input-field col s12">
     <input name='confirmpassword'
                            value={this.state.confirmpassword} onChange={e => this.handleChange(e)} id="confirm-password" type="password" className="validate" />
                    <label className="active" htmlFor="email">
                     Confirm Password
                        
                    </label>
                    <span 
                     className="helper-text"
                     data-error="wrong"
                     data-success="right"
                    
                    /> 
     </div>
 </div>
 <div className="row">
     <div className="input-field col s12">
     <input name='email' value={this.state.email} onChange={e => this.handleChange(e)} id="email" type="email" className="validate" />
                    <label className="active" htmlFor="email">
                        Email
                        
                    </label>
                    <span 
                     className="helper-text"
                     data-error="wrong"
                     data-success="right"
                    
                    /> 
     </div>
 </div>

 <div className='row'>
     <div className="col s6">
    <button className='btn waves-effect red lighten-2'
    type='submit'
    name="action"
    >Create Account</button>

     </div>
 
     
 </div>

                </form>



            </div>            </div>
        )
    }
}
export default Register;