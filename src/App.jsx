import { useState } from 'react'
import GlobalStyle from './Global'
import Header from './components/Header/Header'
import Content from './pages/Content/Content'

function App() {
  const [query, setQuery] = useState("")

  return (
    <>
      <div>
      <Header/>
      <Content/>
      <GlobalStyle/> 
      </div>
    </>
  )
}

export default App
