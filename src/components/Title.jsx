import { useState } from "react"
import { TEMA_LIGHT, TEMA_DARK } from "../constants";
import '../styles/title.css'
import iconoSol from '../assets/icon-sun.svg'
import iconoLuna from '../assets/icon-moon.svg'

const Title = () => {
  const [tema, setTema] = useState(TEMA_LIGHT);

  const cambiarTema = () => {
    const temaElegido = tema === TEMA_LIGHT ? TEMA_DARK : TEMA_LIGHT;
    setTema(temaElegido);
  }

  return(
    <div className="title-contenedor">
      <div className="title-contenedor__texto">devfinder</div>
      <div className="title-contenedor__tema">
        {
          tema === TEMA_LIGHT ? (
            <div className="tema__light" onClick={cambiarTema}>
              LIGHT
              <img src={iconoSol} />
            </div> 
          ) : (
            <div className="tema__dark" onClick={cambiarTema}>
              DARK
              <img src={iconoLuna} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Title
