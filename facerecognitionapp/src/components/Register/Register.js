import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  } 

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onSubmitRegister = () => {
      fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          password: this.state.password
        })
      }).then(response => response.json())
        .then(user => { 
          if (user[0].email === this.state.email) {
             this.props.onrouteChange('home');
             this.props.loadUser(user[0]);
          }else {console.log(user);}
        })
    }

  render () {
      return ( 
          <article className="br2 ba dark-gray b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw5 center">
             <main className="pa4 black-80 center" >
                 <form className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name"  
                  id="register-name" 
                  onChange = {this.onNameChange}
                  />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  onChange = {this.onEmailChange}
                  />
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
            <input onClick ={this.onSubmitRegister} 
                   type="button"
                   className="b tc ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                   value = "Register"
                   />
                </div>
              </form>
            </main> 
            </article>

    );
  }
}

export default Register;
