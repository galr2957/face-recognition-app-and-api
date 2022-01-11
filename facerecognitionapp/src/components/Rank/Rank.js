import React from 'react';
import './Rank.css';

const Rank = ({name, userEntries}) => {
	return (
	    <div className='Rank'>
	       <div className='white f4'> 
	           hi {name} your rank is.....
	       </div>
	       <div className='white f1'>
	           {userEntries}
	       </div>

	    </div>
		);

}

export default Rank;