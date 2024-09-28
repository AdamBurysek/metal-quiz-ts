import { Route, Routes } from 'react-router-dom'
import GamePage from './components/gamePage'
import NotFound from './components/notFound'
import StartPage from './components/startPage'

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
