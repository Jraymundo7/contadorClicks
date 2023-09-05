import React from 'react'
import {Butom} from '../css/Botom.css'

function Botom({ text, esBotonClick, manejarClicks }) {
  return (
    <button className={ esBotonClick  ? 'botonClick' : 'botonReiniciar' }
    onClick={manejarClicks}>
        {text}
    </button>
  )
}

export default Botom;