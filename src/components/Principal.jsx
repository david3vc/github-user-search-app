import '../styles/principal.css'

const Principal = ({ data }) => {

  return(
    <div className="principal-contenedor">
      <div className="principal-contenedor__header">
        <div className="foto-perfil">
          <img src={data?.avatar_url} className="foto-perfil__img img-fluid" />
        </div>
        <div className="usuario">
          <div className="usuario__nombre">
            {data?.login}
          </div>
          <div className="usuario__fecha">
            Joined {data?.created_at}
          </div>
        </div>
      </div>
      <div className="descripcion">
        descripcion
      </div>
      <div className="estadisticas">
        estadisticas
      </div>
      <div className="info-personal">
        informacion personal
      </div>
    </div>
  )
}

export default Principal;
