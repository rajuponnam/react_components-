import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header/header.jsx'
import foodMenu from './cards/cards.js'
import './cards/cards.css'
import Footer from './footer/footer.jsx'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className='main-container'>
      {foodMenu.map((item)=>(
        <div className='container'>
          <h3>{item.name}</h3>
         <p>{item.description}</p>
         <h4>{item.price}</h4>
        </div>
      ))}
    </div>

    <Footer />
    </>
   
  )
}

export default App
