import React, {useEffect, useState} from 'react'

function HookMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMousePosition = e =>{
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(() => {
      console.log("UseEffect called");
      window.addEventListener("mousemove", logMousePosition);

      return () =>{
        console.log('Component unmounting code');
        window.removeEventListener('mousemove', logMousePosition);
      }
    }, []);

    
  return (
    <div>
        X -{x} Y - {y}
    </div>
  )
}

export default HookMouse