import Subpage from 'layouts/Subpage'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'

const Grupo = () => {
  return (
    <Subpage>
      <div className='photo-container text-center'>
        <img
          alt='Flor de Lis Grupo Scout Sattwa 108'
          src={require(`assets/img/flores/grupo_luna_gris.png`).default}
          width='369px'
        ></img>
      </div>
      <h1 className='text-center title title'>Grupo Scout Sattwa 108</h1>
      <h4 className='text-center'>Cultivando un mejor mañana.</h4>
      <Container className='text-center'>
        <h2 className='title'>¿Quiénes somos?</h2>
        <Row className='justify-content-center align-items-center'>
          <Col md='2'></Col>
          <Col md='8'>
            <p>
              El Grupo Scout Sattwa 108 tiene su sede en el Aula Ambiental del
              Parque Manzanares, Comuna 15 Guayabal de Medellín, en el
              departamento de Antioquia y se encuentra adscrito a la Región
              Antioquia Scout <b>RAS</b>, la Asociación Scouts de Colombia{' '}
              <b>ASC</b> y la Organizacion Mundial del Movimiento Scout{' '}
              <b>OMMS</b>.
            </p>
          </Col>
          <Col md='2'></Col>
          <Col xs='12' className='mb-5'>
            <h2 className='title'>Marco Simbólico</h2>
            <h4 className='text-center'>Grito de grupo</h4>
            <audio controls>
              <source
                src={require('assets/audio/grito_del_grupo.m4a').default}
                type='audio/mpeg'
              />
              Tu navegador no soporta este elemento
            </audio>
          </Col>

          <Col md='6' lg='4'>
            <Card>
              <CardBody>
                <img
                  src='https://placehold.co/300x200'
                  alt='Tartán'
                  className='card-img-top'
                />
                <h4 className='card-title title'>Símbolo</h4>
                <CardText>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Subpage>
  )
}

export default Grupo
