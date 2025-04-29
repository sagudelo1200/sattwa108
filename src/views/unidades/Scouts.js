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

function Scouts() {
  document.title = 'Scouts - Sattwa 108'
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const [data, setData] = useState({})
  const unidad = 'scouts'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
    console.log(data)
    setData(response.data)
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
    // eslint-disable-next-line
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
                          require('assets/img/chatgpt/integrante_scouts.png').default +
                        ')',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>Scouts</CardTitle>
                      <p className='card-description'>
                        Un Scout es un jóven que puede venir de la Manada de
                        Lobatos, la Aldea de Webelos o de fuera del Movimiento
                        Scout entre los 10 y los 15 años.
                        <br />
                        <br />
                        Es aventurero y soñador, dispuesto a aprender de la
                        naturaleza al desafiarse y encontrar lo útil de ella.
                        Todo esto se logra teniendo como marco simbólico la
                        aventura que se vive dentro de la Tropa.
                      </p>
                      <Badge className='badge-neutral'>
                        Lema: "Siempre Listos"
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
                      <h4 className='info-title'>La Tropa</h4>
                      <p className='description'>
                        Los Scouts son una unidad para adolescentes de 10 a 15
                        años, donde se desarrollan habilidades prácticas, se
                        forjan lazos de hermandad y se promueve la empatía a
                        través de actividades desafiantes y colaborativas.
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
                      <h4 className='info-title'>Anahata</h4>
                      <p className='description'>
                        Significa "El Invicto" en sánscrito y está relacionado
                        con las emociones y el equilibrio. Este chakra simboliza
                        la conexión con uno mismo y con los demás, reforzando el
                        sentido de pertenencia.
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
                      <h4 className='info-title'>Tropa Anahata</h4>
                      <p className='description'>
                        Juntos representan la etapa en que los scouts enfrentan
                        sus emociones y trabajan en equipo hacia metas comunes.
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
                        require('assets/img/patronos/san_jorge.jpg').default +
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
                      <CardTitle tag='h2'>Hara</CardTitle>
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

export default Scouts
