import { useState } from 'react'

function App() {
  // Coordinates of mouse click down and click up
  const [blocks, setBlocks] = useState({
    items: []
  })

  var positions = {
    id: blocks.items.length,
    start_x: '',
    start_y: '',
    end_x: '',
    end_y: ''
  }

  const updateStart = (e) => {
    positions.start_x = e.pageX;
    positions.start_y = e.pageY;
  }

  const updateEnd = (e) => {
    positions.end_x = e.pageX;
    positions.end_y = e.pageY;
    setBlocks({items: [...blocks.items, positions]})
  }

  return (  
    <div className='container' 
    onMouseDown={(e) => updateStart(e)}
    onMouseUp={(e) => updateEnd(e)}
    >
      <BlocksList blocks={blocks.items}/>
    </div>
  );
}

function BlocksList(props) {
  let positions = props.blocks
  const blockItems = positions.map((position) =>
    <Block key={positions.id} position={position} />
  );

  return (
    <div className='blocks'>
      {blockItems}
    </div>
  )
}

function Block(props) {
  console.log(props.position)
  var width = props.position.end_x - props.position.start_x
  var height = props.position.end_y - props.position.start_y
  console.log(`${width}px`)
  return (
    <div className='block' style={{
      position: 'fixed',
      width: `${width}px`, 
      height: `${height}px`,
      marginLeft: `${props.position.start_x}px`,
      marginTop: `${props.position.start_y}px`,
      backgroundColor: getRandomColor(),
      }}
      >
    </div>
  )
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default App;
