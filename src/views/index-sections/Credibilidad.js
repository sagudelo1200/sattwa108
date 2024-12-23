import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import conexion_mundial from 'assets/img/undraw/conexion_mundial.svg'
import ayudar from 'assets/img/undraw/ayudar.svg'
import proyectos from 'assets/img/undraw/proyectos.svg'
import paises from 'assets/img/undraw/buscar_casa.svg'

const Credibilidad = () => {
  return (
    <section>
      <Container className='text-center mt-3'>
        <h2 className='title d-none'>Scouts alrededor del Mundo</h2>
        <Row>
          <Col md='3' sm='6'>
            <img alt='...' src={conexion_mundial} height={'120px'} />
            <br />
            +57 Millones de Scouts Alrededor del Mundo
          </Col>
          <Col md='3' sm='6'>
            <img alt='...' src={paises} height={'120px'} />
            <br />
            176 Países y Organizaciones Scout Nacionales
          </Col>
          <Col md='3' sm='6'>
            <img alt='...' src={ayudar} height={'120px'} />
            <br />
            +2.7 Billones de Horas de Servicio a la Comunidad
          </Col>
          <Col md='3' sm='6'>
            <img alt='...' src={proyectos} height={'120px'} />
            <br />
            +16 Millones de Proyectos de Servicio y Acciones de Impacto
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Credibilidad
