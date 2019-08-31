import React from 'react';
import './Card.css';

function Card({ id, robot }) {
  return (
      <div id={id} className="Robot">
      	<img src={`https://robohash.org/${robot.name}`} alt="a robot should be here" />
      	<p>
          {robot.name}
        </p>
        <p>
          {robot.email}
      	</p>
    </div>
  );
}

export default Card;
