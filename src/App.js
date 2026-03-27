import React from 'react'
import MenuSection from './MenuSection'
import Navbar from './navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main className='pt-10'>
        <MenuSection />
      </main>

    </div>
  )
}

export default App
