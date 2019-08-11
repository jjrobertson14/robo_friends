import React from 'react';
import './Card.css';

function Card({ robot }) {
  return (
    <div>
      <div className="Robot">
      	<img src={`https://robohash.org/${robot.name}`} alt="a robot should be here" />
      	<p>
          {robot.name}<br />
          {robot.email}
      	</p>
      </div>
    </div>
  );
}

export default Card;
