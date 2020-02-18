import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerV } from './../../actions/vendor_actions'
class VendorR extends Component {
    state={
        name:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        errors:[]
    }  ;
displayErrors=errors=>errors.map((error,i)=><p key={i} > {error} </p>)

isFormValid=()=>{
    let errors=[];
    let error;
    if (this.isFormEmpty(this.state)){
        error={message:'Fill in all the Blanks!'}
        this.setState({errors:errors.concat(error)})

    }
    else if (!this.isPasswordvalid(this.state)){    
            error={message:"Password is Invalid!"}
            this.setState({errors:errors.concat(error)})
    } 
    else{
        return true;
    }
    
}
isFormEmpty=({name,lastname,email,password,confirmpassword})=>{
    return(!name.length||!lastname.length||!email.length||!password.length||!confirmpassword.length)
        
    
}
isPasswordvalid=({password,confirmpassword})=>{
    if(password.length<6 || confirmpassword.length<6){
        return false;
    }
    else if(password!==confirmpassword){
        return false;
    }
    else{
        return true;
    }
}
 handleChange=(event)=>{
        this.setState({
            [event.target.name]:
            event.target.value
        });

    }
    submitForm=(event)=>{
        event.preventDefault();
        let datatoSubmit={
            email: this.state.email,
            name:this.state.name,
            lastname:this.state.lastname,
            password:this.state.password,
            confirmpassword: this.state.confirmpassword
        }
        if(this.isFormValid()){
            this.setState({errors:[]})
            this.props.dispatch(registerV(datatoSubmit)).then(
                response=>{
                    if(response.payload.success){
                    this.props.history.push('/vendor-login')
                    }
                    else{
                        this.setState({
                            errors:this.state.errors.concat("DB connect attempt Failed!")
                        })
                    }
                }

            )
            .catch(err=>{
this.setState({
    errors:this.state.errors.concat(err)
})

            })

        }
        else{
            console.error("Form Is Not Valid!")
        }

    }
    render() {
        return (
            <div className='container'>
            <h2>Register Page Vendors</h2>
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

 {this.state.errors.length >0 && (  <div>
         {this.displayErrors(this.state.errors)}
         </div>)
       
         
       }
 <div className='row'>
     <div className="col s6">
    <button className='btn waves-effect red lighten-2'
    type='submit'
    name="action"
    onClick={this.submitForm}
    >Create Account</button>

     </div>
 
     
 </div>

                </form>



            </div>            </div>
        )
    }
}
export default connect()(VendorR);