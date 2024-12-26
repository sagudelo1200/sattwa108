import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import mundo from 'assets/img/flaticon/mundo.png'
import ayudar from 'assets/img/freepik/ayuda_mutua.png'
import metricas from 'assets/img/flaticon/metricas.png'
import escudo_scout from 'assets/img/freepik/escudo_scout.png'

const RespaldoOMMS = () => {
  return (
    <section>
      <Container className='text-center my-3'>
        <h2 className='title d-none'>Scouts alrededor del Mundo</h2>
        <Row>
          <Col md='3' sm='6' className='my-2'>
            <img alt='...' src={mundo} height={'90px'} />
            <br />
            +57 Millones de Scouts Alrededor del Mundo
          </Col>
          <Col md='3' sm='6' className='my-2'>
            <img alt='...' src={escudo_scout} height={'90px'} />
            <br />
            176 Países y Organizaciones Scout Nacionales
          </Col>
          <Col md='3' sm='6' className='my-2'>
            <img alt='...' src={ayudar} height={'90px'} />
            <br />
            +2.7 Billones de Horas de Servicio a la Comunidad
          </Col>
          <Col md='3' sm='6' className='my-2'>
            <img alt='...' src={metricas} height={'90px'} />
            <br />
            +16 Millones de Proyectos de Servicio y Acciones de Impacto
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default RespaldoOMMS
