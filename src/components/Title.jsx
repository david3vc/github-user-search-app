import { useState } from "react"
import { TEMA_LIGHT, TEMA_DARK } from "../constants";
import '../styles/title.css'
import iconoSol from '../assets/icon-sun.svg'
import iconoLuna from '../assets/icon-moon.svg'

const Title = ({ tema, setTema }) => {
//  const [tema, setTema] = useState(TEMA_LIGHT);

  const cambiarTema = () => {
    const temaElegido = tema === TEMA_LIGHT ? TEMA_DARK : TEMA_LIGHT;
    setTema(temaElegido);
  }

  return(
    <>
      {
        tema === TEMA_DARK ? (
          <div className="title-contenedor-dark">
            <div className="title-contenedor-dark__texto">devfinder</div>
            <div className="title-contenedor-dark__tema">
              <div className="" onClick={cambiarTema}>
                DARK{' '}
                <img src={iconoLuna} />
             </div> 
            </div>
          </div>
        ) : (
          <div className="title-contenedor-light">
            <div className="title-contenedor-light__texto">devfinder</div>
            <div className="title-contenedor-light__tema">
              <div className="" onClick={cambiarTema}>
                LIGHT{' '}
                <img src={iconoSol} />
             </div> 
            </div>
          </div>
        )
      }
    </>
  )
}

export default Title
