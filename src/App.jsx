import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import  Main  from './components/Main/Main'
import ContextProvider from './context/context'


const App = () => {
  return (
    <>
     
    
     <ContextProvider/>
    <Sidebar/>
    <Main/>
    </>
  )
}

export default App
