import { Route, Routes } from 'react-router-dom'
import { AddArticle, ListArticle } from './crud'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ListArticle />} />
        <Route path='/add-article' element={<AddArticle />} />
      </Routes>
    </>
  )
}

export default App
