import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { NOT_AVAILABLE, TEMA_DARK, TEMA_LIGHT } from "../constants";
import "../styles/principal.css";
import iconLocation from "../assets/icon-location.svg";
import iconWebsite from "../assets/icon-website.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconCompany from "../assets/icon-company.svg";

const Principal = ({ data, tema }) => {
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    if (data?.created_at) {
      const fechaFormateada = dayjs(data?.created_at).format("D MMM YYYY");

      setFecha(fechaFormateada);
    }
  }, [data]);

  return (
    <>
      {tema === TEMA_DARK ? (
        <div className="principal-contenedor-light">
          <div className="principal-contenedor__header">
            <Row>
              <Col xs={4} className="d-flex justify-content-center">
                <div className="foto-perfil">
                  <img
                    src={data?.avatar_url}
                    className="foto-perfil__img img-fluid"
                  />
                </div>
              </Col>
              <Col>
                <div className="usuario">
                  <div className="usuario__name">{data?.name}</div>
                  <div className="usuario__username">@{data?.login}</div>
                  <div className="usuario__fecha">Joined {fecha}</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="principal-contenedor__descripcion">
            {data?.bio !== null ? (
              <span>{data?.bio}</span>
            ) : (
              <span className="not-available">{NOT_AVAILABLE}</span>
            )}
          </div>
          <div className="principal-contenedor__estadisticas-light">
            <Row>
              <Col className="estadisticas__celda">
                <p className="estadisticas__texto">Repos</p>
                <p className="estadisticas__numero">{data?.public_repos}</p>
              </Col>
              <Col className="estadisticas__celda" >
                <p className="estadisticas__texto">Followers</p>
                <p className="estadisticas__numero">{data?.followers}</p>
              </Col>
              <Col className="estadisticas__celda">
                <p className="estadisticas__texto">Following</p>
                <p className="estadisticas__numero">{data?.following}</p>
              </Col>
            </Row>
          </div>
          <div className="principal-contenedor__info-personal">
            <Row>
              <Col xs={12} className="info-personal__item">
                <img src={iconLocation} />&nbsp;
                {data?.location !== null ? (
                  <span className="info-personal__data">{data?.location}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
              <Col xs={12} className="info-personal__item">
                <img src={iconWebsite} />&nbsp;
                {data?.html_url !== null ? (
                  <span className="info-personal__data">{data?.html_url}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="info-personal__item">
                <img src={iconTwitter} />&nbsp;
                {data?.twitter_username !== null ? (
                  <span className="info-personal__data">{data?.twitter_username}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
              <Col xs={12} className="info-personal__item">
                <img src={iconCompany} />&nbsp;
                {data?.company !== null ? (
                  <span className="info-personal__data">{data?.company}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <div className="principal-contenedor-dark">
          <div className="principal-contenedor__header dark">
            <Row>
              <Col xs={4} className="d-flex justify-content-center">
                <div className="foto-perfil">
                  <img
                    src={data?.avatar_url}
                    className="foto-perfil__img img-fluid"
                  />
                </div>
              </Col>
              <Col>
                <div className="usuario">
                  <div className="usuario__name">{data?.name}</div>
                  <div className="usuario__username">@{data?.login}</div>
                  <div className="usuario__fecha">Joined {fecha}</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="principal-contenedor__descripcion dark">
            {data?.bio !== null ? (
              <span>{data?.bio}</span>
            ) : (
              <span className="not-available">{NOT_AVAILABLE}</span>
            )}
          </div>
          <div className="principal-contenedor__estadisticas-dark">
            <Row className='estadisticas__fila' >
              <Col className="estadisticas__celda">
                <p className="estadisticas__texto">Repos</p>
                <p className="estadisticas__numero">{data?.public_repos}</p>
              </Col>
              <Col className="estadisticas__celda" >
                <p className="estadisticas__texto">Followers</p>
                <p className="estadisticas__numero">{data?.followers}</p>
              </Col>
              <Col className="estadisticas__celda">
                <p className="estadisticas__texto">Following</p>
                <p className="estadisticas__numero">{data?.following}</p>
              </Col>
            </Row>
          </div>
          <div className="principal-contenedor__info-personal dark">
            <Row>
              <Col xs={12} className="info-personal__item">
                <img src={iconLocation} />&nbsp;
                {data?.location !== null ? (
                  <span className="info-personal__data">{data?.location}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
              <Col xs={12} className="info-personal__item">
                <img src={iconWebsite} />&nbsp;
                {data?.html_url !== null ? (
                  <span className="info-personal__data">{data?.html_url}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="info-personal__item">
                <img src={iconTwitter} />&nbsp;
                {data?.twitter_username !== null ? (
                  <span className="info-personal__data">{data?.twitter_username}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
              <Col xs={12} className="info-personal__item">
                <img src={iconCompany} />&nbsp;
                {data?.company !== null ? (
                  <span className="info-personal__data">{data?.company}</span>
                ) : (
                  <span className="not-available">{NOT_AVAILABLE}</span>
                )}
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Principal;
