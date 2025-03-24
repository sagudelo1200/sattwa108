import React, { useState, useEffect } from 'react'
import fetchData from './functions/fetchData'
// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap'

// core components
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar.js'
import Header from './components/Header.js'
import Footer from 'components/Footers/Footer.js'

function Familia() {
  document.title = 'Familia - Sattwa 108'
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  // const [data, setData] = useState({})
  const unidad = 'familia'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
    // setData(response.data)
    setIntegrantesN(response.integrantes)
    setLoading(false)
  }

  useEffect(() => {
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0

    fetchAllData()

    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='wrapper'>
        <Header unidad={unidad} nIntegrantes={nIntegrantes} />
        <section className='section'>
          <div className='projects-5 pt-0'>
            <Container>
              <Row className='align-items-center'>
                <Col className='ml-auto' md='5'>
                  <Card
                    className='card-background card-background-product card-raised'
                    style={{
                      backgroundImage: 'url(https://fakeimg.pl/600x900)',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>Cachorros</CardTitle>
                      <p className='card-description'>
                        Un Cachorro es un niño o niña que ingresa al Movimiento
                        Scout entre los 5 y los 7 años.
                        <br />
                        <br />
                        Desarrolla sus actividades teniendo como marco simbólico
                        la fantasía que vive dentro de la Familia. Raksha es su
                        guía y los protege mientras conocen la selva del
                        Seeonee.
                      </p>
                      <Badge className='badge-neutral'>
                        Lema: "Siempre Mas Obedientes"
                      </Badge>
                    </CardBody>
                  </Card>
                </Col>
                <Col className='mr-auto' md='5'>
                  <div
                    className='info info-horizontal'
                    style={{ maxWidth: 'none' }}
                  >
                    <div className='icon icon-danger'>
                      <i className='fas fa-users' style={{ width: '35px' }}></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>La Familia</h4>
                      <p className='description'>
                        Es una unidad scout para niños y niñas de 5 a 7 años,
                        donde se fomenta el desarrollo de valores básicos, la
                        exploración inicial del mundo natural y el aprendizaje a
                        través del juego y la convivencia.
                      </p>
                    </div>
                  </div>
                  <div
                    className='info info-horizontal'
                    style={{ maxWidth: 'none' }}
                  >
                    <div className='icon icon-danger'>
                      <i
                        className='fa-solid fa-dharmachakra'
                        style={{ width: '35px' }}
                      ></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Múládhára</h4>
                      <p className='description'>
                        Es un término sánscrito que significa "Raíz" o "Base".
                        Este chakra está relacionado con la estabilidad, la
                        seguridad y los fundamentos de la vida, representando
                        las primeras etapas de crecimiento personal.
                      </p>
                    </div>
                  </div>
                  <div
                    className='info info-horizontal'
                    style={{ maxWidth: 'none' }}
                  >
                    <div className='icon icon-danger'>
                      <i
                        className='fa-solid fa-person-hiking'
                        style={{ width: '35px' }}
                      ></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Familia Múládhára</h4>
                      <p className='description'>
                        Juntos, simbolizan el inicio del camino scout,
                        estableciendo las bases para un desarrollo integral y
                        significativo.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col className='mx-auto my-5' md='9'>
                  <div className='separator-line bg-info'></div>
                </Col>

                <Col className='m-auto' md='5'>
                  <Card
                    className='card-background card-background-product card-raised'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/patronos/san_francisco_de_asis.jpg')
                          .default +
                        ')',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>San Francisco de Asís</CardTitle>
                      <p className='description'></p>
                      <Badge className='badge-neutral'>Santo Patrono</Badge>
                    </CardBody>
                  </Card>
                </Col>

                <Col className='m-auto' md='5'>
                  <Card
                    className='card-background card-background-product card-raised'
                    style={{
                      backgroundImage: 'url(https://fakeimg.pl/600x600)',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>Arquetipo</CardTitle>
                      <p className='description'></p>
                      <Badge className='badge-neutral'>Arquetipo</Badge>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Familia
