import React, { useState } from 'react'
import DrumPad from './components/drumPad'
import './App.css';

function App() {
  const [display, setDisplay] = useState("")
  const pads = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ]

  const handleDisplay = (textDisplay) => {
    let texts = ""
    pads.map((pad) => {
      if (pad.keyTrigger === textDisplay) {
        texts = pad.id
      }
      return texts
    })
    setDisplay(texts)
  }

  return (
    <div className="App">
      <h1>Drum Pad Machine</h1>
      <main id="drum-machine">
        <p id="display">{display}</p>
        <div className="drum-pad-container">
          {
            pads.map((pad, key) => {
              return(
                <DrumPad key={key} keyCode={pad.keyCode} keyTrigger={pad.keyTrigger} id={pad.id} url={pad.url} onDisplay={handleDisplay} />
              )
            })
          }
        </div>
      </main>
      <footer>
        <p>Made with ♥ by RamdhaniHendrie</p>
      </footer>
    </div>
  );
}

export default App;
