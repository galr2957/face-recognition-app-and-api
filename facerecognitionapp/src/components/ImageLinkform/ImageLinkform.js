import React from 'react';
import './ImageLinkform.css';

const ImageLinkform = ({OnInputChange, onButonClick}) => {
	return (
	    <div className = 'ImageLinkform'> 
	        <p className ='f5'>
	            {'this magic app will detect faces in your picture, give it a try!'}
	        </p>
	        <div className='center'> 
	            <div className=' form center pa2 br3 shadow-5'>
	             <input className='f4 pa2 w-70 center' type='text' onChange={OnInputChange}/>  <br/>
	             <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButonClick}> 
	               Detect 
	             </button>
                </div>
	        </div>
	    </div>
		);

}

export default ImageLinkform;