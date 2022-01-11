import './App.css';
import Navigation from './components/navigation/navigation'
import ImageLinkform from './components/ImageLinkform/ImageLinkform'
import Particles from 'react-particles-js'
import Rank from './components/Rank/Rank'
import Facercognition from './components/facercognition/Facercognition'
import Signin from './components/signin/Signin'
import Register from './components/Register/Register'
import React from 'react';
import Clarifai from 'clarifai'

const ParticlesParams = {
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
}

const app = new Clarifai.App({
apiKey: '21adc635f72145388f9abe9ac455a821'
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [1,2,3,4],
      input: '',
      imageurl :'',
      Box : {},
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: ''
      }
    }
  }

loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.enteries,
    joined: data.joined

  }})
  console.log(this.state.user);
}

calculatefacelocation = (data) => {
  const Faceposition = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('FacercognitionImg');
  const width = Number(image.width);
  const height = Number(image.height);
  return{
    leftrow : width * Faceposition.left_col,
    toprow : height * Faceposition.top_row,
    rightrow : width - (Faceposition.right_col * width),
    bottomrow : height - (Faceposition.bottom_row * height)
  }

}

  displayfaceposition = (box) => {
    this.setState({Box: box});
  }
  OnInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButonClick = (event) => {
    this.setState({imageurl: this.state.input});
    app.models.predict(
                       Clarifai.FACE_DETECT_MODEL,
                       this.state.input)
                       .then(response => this.displayfaceposition(this.calculatefacelocation(response)))
                       .catch(err => console.log(err));
    fetch('http://localhost:3000/image', {
        method: 'put',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
        })
      }).then(res => res.json())
        .then(data => {
          this.setState(Object.assign(this.state.user, {entries: data}));
        })
  }

  onRouteChangee = (state) => { 
    this.setState({route: state});
    this.setState({imageurl: ''});
    }


 

  render() {
    return (
    <div className="App">
      <Particles  className='particles'
        params={ParticlesParams}/>
      {  this.state.route === 'signin'
         ? <Signin onrouteChange = {this.onRouteChangee} loadUser= {this.loadUser}/>
         : ( this.state.route === 'Register' ?
          <Register loadUser= {this.loadUser}  onrouteChange = {this.onRouteChangee}/>
          :
          <div>
           <Navigation onrouteChange = {this.onRouteChangee}/>
           <Rank name= {this.state.user.name} userEntries= {this.state.user.entries}/>
           <ImageLinkform 
                  OnInputChange = {this.OnInputChange} 
                  onButonClick = {this.onButonClick} />
           <Facercognition box = {this.state.Box} imageurl = {this.state.imageurl}/>
           </div>)
    }
    </div>
  );
  }
}


export default App;
