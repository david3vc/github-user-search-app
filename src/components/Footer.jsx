import { NOT_AVAILABLE, TEMA_DARK, TEMA_LIGHT } from "../constants";
import '../styles/footer.css'

const Footer = ({ tema }) => {
  return (
    <>
        {
            TEMA_DARK === tema ? (
                <div className="light"></div>
            ) : (
                <div className="tdark"></div>
            )
        }
    </>
  )
}

export default Footer