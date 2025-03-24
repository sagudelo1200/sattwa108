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

function Sociedad() {
  document.title = 'Sociedad - Sattwa 108'
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  // const [data, setData] = useState({})
  const unidad = 'sociedad'

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
                      <CardTitle tag='h2'>Pioneros</CardTitle>
                      <p className='card-description'>
                        Un Pionero es un jóven que puede venir de la Tropa de
                        Scouts o de fuera del Movimiento Scout entre los 15 y
                        los 18 años.
                        <br />
                        <br />
                        Es alguien aventurero y dispuesto a aprender al convivir
                        con la naturaleza y enfrentarse a sus desafios. Todo
                        esto se logra teniendo como marco simbólico la aventura
                        real o cooperativa que se vive dentro de la Sociedad.
                      </p>
                      <Badge className='badge-neutral'>
                        Lema: "Siempre Alerta"
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
                      <h4 className='info-title'>La Sociedad</h4>
                      <p className='description'>
                        Es una unidad scout para jóvenes de 15 a 18 años, donde
                        se fomenta el pensamiento crítico, la expresión de ideas
                        y la participación activa en su comunidad.
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
                      <h4 className='info-title'>Vishuddha</h4>
                      <p className='description'>
                        En sánscrito, significa "Purificación". Este chakra está
                        relacionado con la comunicación y la claridad de
                        pensamiento, ayudando a los integrantes a expresar sus
                        ideas y valores.
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
                      <h4 className='info-title'>Sociedad Vishuddha</h4>
                      <p className='description'>
                        Juntos simbolizan la importancia de una voz consciente y
                        un liderazgo basado en principios sólidos.
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
                        require('assets/img/patronos/san_ignacio_de_loyola.jpg')
                          .default +
                        ')',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>San Ignacio de Loyola</CardTitle>
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
                      <CardTitle tag='h2'>Sadashiva</CardTitle>
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

export default Sociedad
