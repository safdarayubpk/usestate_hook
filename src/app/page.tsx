'use client'; // Directive for client-side rendering in Next.js

import React, { useState } from 'react'; // Import React and the useState hook

export default function Homepage() {
  // Define the Homepage component

  // Declare a state variable `counter` and initialize it to 0
  // `setCounter` is the function to update the counter's value
  const [counter, setCounter] = useState(0);

  // Function to handle the decrement (-1) of the counter
  function handleMinus() {
    // Update the counter state by subtracting 1 from the current value
    setCounter(counter - 1);

    // Log the current value of the counter (note that it logs before the state update)
    console.log(counter);
  }

  // Function to handle the increment (+1) of the counter
  function handlePlus() {
    // Update the counter state using the previous value of the state (prevCounter)
    setCounter((prevCounter) => prevCounter + 1);

    // Log the current value of the counter (note that it logs before the state update)
    console.log(counter);
  }

  // The JSX returned by the component
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Button to decrement the counter */}
      <button className="bg-green-400 p-5" onClick={handleMinus}>
        -
      </button>

      {/* Display the current value of the counter */}
      <span className="p-5 text-lg font-bold">{counter}</span>

      {/* Button to increment the counter */}
      <button className="bg-blue-300 p-5" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}
