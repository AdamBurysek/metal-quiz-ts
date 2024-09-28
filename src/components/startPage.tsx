import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StartPage = (): JSX.Element => {
  const [startingGame, setStartingGame] = useState(false)
  const [animation, setAnimation] = useState(false)
  const navigate = useNavigate()

  const startGame = () => {
    setStartingGame(true)
    setTimeout(redirectToGame, 3000)
  }

  const redirectToGame = () => {
    navigate('/game')
  }

  const animate = () => {
    setTimeout(animationSwitch, 2500)
  }

  animate()

  function animationSwitch() {
    setAnimation(!animation)
  }

  return (
    <div className="section">
      <div className="main-page_header">
        <h1 className={startingGame ? 'quiz_heading starting-quiz_heading' : 'quiz_heading'}>Kvíz</h1>
        <h3 className={startingGame ? 'quiz_desc starting-quiz_desc' : 'quiz_desc'}>Poznáš o jaké kovy se jedná?</h3>
        <button
          type="button"
          className={
            startingGame ? 'btn_start starting-btn_start' : animation ? 'btn_start btn_start-animation' : 'btn_start'
          }
          onClick={startGame}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default StartPage
