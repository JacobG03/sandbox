import { useState } from 'react'

function App() {
  // Coordinates of mouse click down and click up
  const [blocks, updateBlocks] = useState([])

  var positions = {
    start_x: '',
    start_y: '',
    end_x: '',
    end_y: ''
  }

  const updateStart = (e) => {
    positions.start_x = e.pageX;
    positions.start_y = e.pageX;
  }

  const updateEnd = (e) => {
    positions.start_x = e.pageX;
    positions.start_x = e.pageX;
    // Call create div function
  }

  return (  
    <div className='container' 
    onMouseDown={(e) => updateStart(e)}
    onMouseUp={(e) => updateEnd(e)}
    >
      
    </div>
);
}

export default App;
