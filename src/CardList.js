import React from 'react';
import './CardList.css';
import Card from './Card';
import './CardList.css';

function CardList({robots}) {
	return (
		<div className='cardList'>
		{
			robots.map( (robot, i) => {
				return <Card key={i} id={robot.id} robot={robot} />
			})
		}
		</div>
	);
}

export default CardList;
