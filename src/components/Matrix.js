import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null)); // Initialize 9 boxes with null
  const [clicks, setClicks] = useState([]); // Store the order of clicks

  const handleClick = (index) => {
    // If the box is already clicked or the game is over, do nothing
    if (boxes[index] || clicks.length === 9) return;

    const newBoxes = [...boxes];
    newBoxes[index] = 'green'; // Change the clicked box to green
    setBoxes(newBoxes);

    const newClicks = [...clicks, index];
    setClicks(newClicks);

    // If this is the 9th click, change all boxes to orange in the order of clicks
    if (newClicks.length === 9) {
      setTimeout(() => {
        const finalBoxes = [...newBoxes];
        newClicks.forEach((i, idx) => {
          setTimeout(() => {
            finalBoxes[i] = 'orange';
            setBoxes([...finalBoxes]); // Update boxes with the final color
          }, idx * 300); // Delay for each box to turn orange
        });
      }, 500);
    }
  };

  return (
    <div className="matrix">
      {boxes.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color || 'lightgray' }}
          onClick={() => handleClick(index)}
        >
        </div>
      ))}
    </div>
  );
};

export default Matrix;
