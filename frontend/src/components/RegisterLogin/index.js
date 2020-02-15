import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from './../../actions/user_actions'
export class Login extends Component {
    state={
        email:"",
        password:"",
        errors:[]
    };
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:
            event.target.value
        });

    }
    submitForm=(event)=>{
        event.preventDefault();
        let datatoSubmit={
            email:this.state.email,
            password:this.state.password
        }

        if (this.isFormValid(this.state)){
            this.setState({errors:[]})
            this.props.dispatch(loginUser(datatoSubmit)).then(response=>{
    if(response.payload.loginSuccess){
        this.props.history.push('./home')
    }else{
        this.setState({
            errors:this.state.errors.concat('Failed to Login ! Please Check Email and Password!')
        })
    }



            })
            

        }
        else{
             this.setState({
                 errors:this.state.errors.concat('Form is Not Valid!')
             })   
        }

    }
isFormValid=({email,password})=> email && password;
displayErrors=errors=>errors.map((error,i)=><p key={i} > {error} </p>)
   
    render() {
        return (
            <div className='container'>
                <h2>Login Page</h2>
                <div className='row'>
                    <form className='col s12' onSubmit={event => this.submitForm(EventSource)}>
                        <div className="row">
                        <div className="input-field col s12">                             
                        <input name='email'
                                value={this.state.email} onChange={e => this.handleChange(e)} id="email" type="email" className="validate" />
                        <label htmlFor="email">
                            Email
                            
                        </label>
                        <span 
                         className="helper-text"
                         data-error="Type the Correct Email!"
                         data-success="Right"
                        
                        /> </div>

                                    
     </div>
     <div className="row">
         <div className="input-field col s12">
         <input name='password'
                                value={this.state.password} onChange={e => this.handleChange(e)} id="password" type="password" className="validate" />
                        <label htmlFor="email">
                            Password
                            
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
         <div className="col s12">
        <button className='btn waves-effect red lighten-2'
        type='submit'
        name="action"
        onClick={this.submitForm}
        >Login</button>

         </div>
         
     </div>

                    </form>



                </div>            </div>
        )
    }
}
function mapStatetoProps(state){
    return{
        user: state.user
    }

}
export default connect(mapStatetoProps)(Login) ;

