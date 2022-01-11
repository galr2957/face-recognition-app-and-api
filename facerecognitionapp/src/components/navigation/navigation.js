import React from 'react';
import Tilt from 'react-tilt'
import Cat from './cat_icon.png'
import './Navigation.css';

const Navigation = ({onrouteChange}) => {
	return (
	       <nav style ={{display: 'flex' ,justifyContent : 'flex-end'}}>
	       <p onClick ={() => onrouteChange("signin")}
	          className=' link dim black underline pa3 pointer'> 
	          sign out 
	       </p>

	       	<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 120, width: 120}} >
                <div className="Tilt-inner pa3"> <img alt='' id={'webSiteIcon'} src={Cat}/> </div>
            </Tilt>
	       </nav>

		);

}

export default Navigation;