import React from 'react';
import './Facercognition.css';

const Facercognition = ({imageurl, box}) => {
	return (
	     <div className= 'center ma'>
	       <div className='absolute mt2 '>
	        <img id={'FacercognitionImg'} className ="photo"
	          alt='' 
	          src={imageurl} />
	        <div className='boundingBox' style = {{top: box.toprow, right: box.rightrow, left: box.leftrow, bottom: box.bottomrow}}>
	        </div>
	      </div>
	     </div>
		);
}

export default Facercognition;