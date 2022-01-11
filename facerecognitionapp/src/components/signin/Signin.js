import React from 'react';

class Signin extends React.Component  {
  
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({userEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({userPassword: event.target.value});
  }

    onSubmitSignin = () => {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify({
          email: this.state.userEmail,
          password: this.state.userPassword
        })
      }).then(response => response.json())
        .then(data => {
          if (data.email === this.state.userEmail) {
            console.log(data);
            this.props.onrouteChange('home');
            this.props.loadUser(data);
          }
          else {
            alert(data);
          }
        })
    }

   onSubmitRegister = () => {
     this.props.onrouteChange('Register');
   }

  render () {
            return ( 
            <article className="br2 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw5 center">
             <main className="pa4 black-80 center" >
                 <form className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"  
                   type="text" 
                   name="email-address"  
                   id="email-address" 
                   onChange = {this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange = {this.onPasswordChange}
                  />
            </div>
          </fieldset>
          <div className="">
            <input 
               onClick ={this.onSubmitSignin} 
               className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib tc" 
               value="Sign in"
               type="button"/>
          </div>
          <div className="lh-copy mt3">
            <a  
              onClick ={this.onSubmitRegister}
              href="#0" 
              className="f6 link dim black db"
              >
              Register  
            </a>
          </div>
        </form>
       </main> 
      </article>

          );
  }

}

export default Signin;