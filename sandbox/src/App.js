import { useState } from 'react'

function App() {
  // Coordinates of mouse click down and click up
  var positions = {
    start_x: '',
    start_y: '',
    end_x: '',
    end_y: ''
  }

  return (  
    <div className='container' 
    onMouseDown={(e) => console.log(e.pageX, e.pageY)}
    onMouseUp={(e) => console.log(e.pageX, e.pageY)}
    >
      
    </div>
  );
}

export default App;
