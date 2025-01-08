import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import mundo from 'assets/img/flaticon/mundo.png'
import ayudar from 'assets/img/freepik/ayuda_mutua.png'
import metricas from 'assets/img/flaticon/metricas.png'
import escudo_scout from 'assets/img/freepik/escudo_scout.png'

const HistoriaEscultismo = () => {
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
        <Row>
          <Col md='9' className='mx-auto mt-4'>
            <p className='text-justify mt-2'>
              En el verano de 1907, un grupo de niños se reunió en la Isla de
              Brownsea, Inglaterra, para vivir una aventura que cambiaría el
              mundo. Guiados por Robert Baden-Powell, descubrieron que en la
              naturaleza podían aprender lecciones para toda la vida: trabajar
              en equipo, liderar con el ejemplo y cuidar de los demás. Ese
              primer campamento experimental fue el inicio de algo más grande,
              un movimiento que conecta generaciones,{' '}
              <a
                href='https://es.wikipedia.org/wiki/escultismo'
                rel='noreferrer'
                target='_blank'
              >
                El Movimiento Scout
              </a>
              .
              <br />
              <br />
              Lo que comenzó como una idea sencilla cruzó fronteras, idiomas y
              culturas, encendiendo una chispa de inspiración en millones de
              niños, niñas, adolescentes y jóvenes. Unidos por la promesa de{' '}
              <b className='text-danger'>
                "Dejar el mundo mejor de como lo encontramos"
              </b>
              , los scouts transforman su entorno y sus propias vidas,
              demostrando que los valores universales pueden construir un futuro
              más justo, sostenible y solidario.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HistoriaEscultismo
