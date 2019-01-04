import React from 'react';

const Card = (props) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img width='250px' alt='robot' src={`https://robohash.org/${props.id}`} />
			<div className='card-desc'>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	)
};

export default Card;