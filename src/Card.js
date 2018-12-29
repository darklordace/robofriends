import React from 'react';
import './Card.css'

const Card = (props) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
			<img width='200px' alt='robot' src={`https://robohash.org/${props.id}`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	)
}

export default Card;