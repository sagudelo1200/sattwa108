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

function Clan() {
  document.title = 'Clan - Sattwa 108'
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const unidad = 'clan'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
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
                      backgroundImage:
                        'url(' +
                          require('assets/img/chatgpt/integrante_clan.png').default +
                        ')',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>Rovers</CardTitle>
                      <p className='card-description'>
                        Un Rover es un adulto jóven que puede venir de la
                        Sociedad de Pioneros o de fuera del Movimiento Scout
                        entre los 18 y los 22 años.
                        <br />
                        <br />
                        Trabajan en el Clan, una unidad donde actúan para
                        transformar positivamente sus entornos y ser
                        protagonistas en sus comunidades. La propuesta Rover es
                        para quienes deseen vivir los valores Scout, con la
                        libertad como marco simbólico.
                      </p>
                      <Badge className='badge-neutral'>Lema: "Servir"</Badge>
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
                      <h4 className='info-title'>El Clan</h4>
                      <p className='description'>
                        Es una unidad scout para jóvenes adultos de 18 a 22
                        años, centrada en la toma de decisiones, el liderazgo y
                        el compromiso con su entorno.
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
                      <h4 className='info-title'>Ajña</h4>
                      <p className='description'>
                        Del sánscrito, significa "Comando". Este chakra está
                        relacionado con la intuición y la capacidad de
                        discernir, marcando una etapa de madurez personal y
                        espiritual.
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
                      <h4 className='info-title'>Clan Ajña</h4>
                      <p className='description'>
                        Juntos representan la unión entre la sabiduría y la
                        acción, preparando a los jóvenes para enfrentar los
                        desafíos de la adultez.
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
                        require('assets/img/patronos/san_pablo.jpg').default +
                        ')',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>San Pablo</CardTitle>
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
                      <CardTitle tag='h2'>Hakini</CardTitle>
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

export default Clan
