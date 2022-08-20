import './drumPad.css'

const DrumPad = (props) => {
  const playSound = () => {
    const sound = document.getElementById(props.keyTrigger)
    sound.currentTime = 0
    sound.play()
  }

  const handleClick = (e) => {
    playSound()
    props.onDisplay(e.target.innerText)
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      document.getElementById(props.keyTrigger).parentNode.click()
    }
  }

  document.addEventListener('keydown', handleKeyPress)

  return (
    <div className='drum-pad' onClick={(e) => handleClick(e)}>
      {props.keyTrigger}
      <audio
        className='clip'
        id={props.keyTrigger}
        src={props.url}
      />
    </div>
  )
}

export default DrumPad