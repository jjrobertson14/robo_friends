import React from 'react';
import './Card.css';

function Card({ id, robot }) {
  if (robot === undefined) {
    robot = {
      name: '',
      email: ''
    }
  }
  return (
      <div id={id} className="Robot">
      	<img src={`https://robohash.org/${robot.name}?size=200x200`} alt="a robot should be here" />
      	<h1>
          {robot.name}
        </h1>
        <p>
          {robot.email}
      	</p>
        <blep></blep>
    </div>
  );
}

export default Card;
