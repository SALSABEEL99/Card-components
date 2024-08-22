import { useState } from 'react'
import './App.css'
import { Card } from './components/card';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
       <Card 
       imgSrc="https://picsum.photos/seed/picsum/200/200" 
       imgAlt="Card-Image" 
       title='Card Title'
       buttonText="See more Pictures"
       description="This is card description"
       link="card.page"/>
    
    <Card 
       imgSrc="https://picsum.photos/id/1/200/200" 
       imgAlt="Card-Image" 
       title='Card Title'
       buttonText="See more Pictures"
       description="This is card description"
       link="card.page"/>
    
      
      </div>
       
    </>
  )
}

export default App
