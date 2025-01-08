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

function Manada() {
  document.title = 'Manada - Sattwa 108'
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  // const [data, setData] = useState({})
  const unidad = 'manada'

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
                      backgroundImage: 'url(https://fakeimg.pl/600x900)',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>Lobatos</CardTitle>
                      <p className='card-description'>
                        Un Lobato es un niño o niña que puede venir de la
                        Familia de Cachorros o de fuera del Movimiento Scout
                        entre los 7 y los 10 años.
                        <br />
                        <br />
                        Desarrolla sus actividades teniendo como marco simbólico
                        la fantasía que vive dentro de la Manada. Akela es su
                        guía y les da su mano en el camino que recorre por la
                        selva del Seeonee.
                      </p>
                      <Badge className='badge-neutral'>
                        Lema: "Siempre Mejor"
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
                      <h4 className='info-title'>La Manada</h4>
                      <p className='description'>
                        Es una unidad scout para niños y niñas de 7 a 10 años,
                        donde se fomenta la creatividad, el trabajo en equipo y
                        el descubrimiento de habilidades a través de juegos y
                        actividades simbólicas.
                      </p>
                    </div>
                  </div>
                  <div
                    className='info info-horizontal'
                    style={{ maxWidth: 'none' }}
                  >
                    <div className='icon icon-danger'>
                      <i
                        class='fa-solid fa-dharmachakra'
                        style={{ width: '35px' }}
                      ></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Swádhisthána</h4>
                      <p className='description'>
                        Es un término sánscrito que significa "El Fundamento de
                        sí mismo". Este chakra está relacionado con el cuerpo y
                        la energía creativa, simbolizando el potencial de los
                        lobatos para crecer y florecer.
                      </p>
                    </div>
                  </div>
                  <div
                    className='info info-horizontal'
                    style={{ maxWidth: 'none' }}
                  >
                    <div className='icon icon-danger'>
                      <i
                        class='fa-solid fa-person-hiking'
                        style={{ width: '35px' }}
                      ></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Manada Swádhisthána</h4>
                      <p className='description'>
                        Juntos representan la unión del espíritu scout con la
                        resiliencia y la exploración personal en esta etapa
                        formativa.
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
                      backgroundImage:
                        'url(' +
                        require('assets/img/arquetipos/dalle/vishnu.png')
                          .default +
                        ')',
                    }}
                  >
                    <CardBody>
                      <CardTitle tag='h2'>Vishnu</CardTitle>
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

export default Manada
