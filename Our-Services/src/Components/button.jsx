import React from 'react';
import { useState, useEffect } from "react";

function Button() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  }, []);
  console.log({count})
  return (
    <div>
       <button className='btn' onClick={() => setCount((c) => c + 1)}>Learn More</button>
    </div>
  )
}
export default Button
