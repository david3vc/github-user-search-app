import dayjs from 'dayjs'
import {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import { NOT_AVAILABLE } from '../constants';
import '../styles/principal.css'
import iconLocation from '../assets/icon-location.svg'
import iconWebsite from '../assets/icon-website.svg'
import iconTwitter from '../assets/icon-twitter.svg'
import iconCompany from '../assets/icon-company.svg'

const Principal = ({ data }) => {
  const [fecha, setFecha] = useState(null);

  useEffect(()=>{
    if(data?.created_at){
      const fechaFormateada = dayjs(data?.created_at).format('D MMM YYYY')

      setFecha(fechaFormateada)
    } 
  },[data]);

  return(
    <div className="principal-contenedor">
      <div className="principal-contenedor__header">
        <Row>
          <Col xs={4} className='d-flex justify-content-center' >
            <div className="foto-perfil">
              <img src={data?.avatar_url} className="foto-perfil__img img-fluid" />
            </div>
          </Col>
          <Col>
            <div className="usuario">
              <div className="usuario__name">
                {data?.name}
              </div>
              <div className="usuario__username">
                @{data?.login}
              </div>
              <div className="usuario__fecha">
                Joined {fecha}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="descripcion">
        {
          data?.bio !== null ? <span>{data?.bio}</span> : <span>{NOT_AVAILABLE}</span>
        }
      </div>
      <div className="estadisticas">
        <Row>
          <Col>
            <p>Repos</p>
            <p>{data?.public_repos}</p>
          </Col>
          <Col>
            <p>Followers</p>
            <p>{data?.followers}</p>
          </Col>
          <Col>
            <p>Following</p>
            <p>{data?.following}</p>
          </Col>
        </Row>
      </div>
      <div className="info-personal">
        <Row>
          <Col xs={12} >
            <img src={iconLocation} />
            {
              data?.location !== null ? <span>{data?.location}</span> : <span>{NOT_AVAILABLE}</span>
            }
          </Col>
          <Col xs={12} >
            <img src={iconWebsite} />
            {
              data?.html_url !== null ? <span>{data?.html_url}</span> : <span>{NOT_AVAILABLE}</span>
            }
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
            <img src={iconTwitter} />
            {
              data?.twitter_username !== null ? <span>{data?.twitter_username}</span> : <span>{NOT_AVAILABLE}</span>
            }
          </Col>
          <Col xs={12} >
            <img src={iconCompany} />
            {
              data?.company !== null ? <span>{data?.company}</span> : <span>{NOT_AVAILABLE}</span>
            }
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Principal;
