import React, { useEffect, useState } from 'react'
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

function Adultos() {
  document.title = 'Adultos - Sattwa 108'
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  // const [data, setData] = useState({})
  const unidad = 'adultos'

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
                      <CardTitle tag='h2'>Adultos Voluntarios</CardTitle>
                      <p className='card-description'>
                        Un Dirigente es un adulto voluntario que decide dedicar
                        su tiempo, energía y conocimientos al Movimiento Scout,
                        ya sea como miembro formado en sus filas o uniéndose
                        desde fuera.
                        <br />
                        <br />
                        Trabajan guiando a las unidades del grupo, inspirando a
                        niños, niñas y jóvenes a crecer a través de actividades
                        significativas. También fomentan valores universales,
                        fortalecen la hermandad scout y lideran con el ejemplo.
                      </p>
                      <Badge className='badge-neutral'>
                        Lema: "Siempre Listos Para Servir"
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
                      <h4 className='info-title'>Los Dirigentes</h4>
                      <p className='description'>
                        Los Dirigentes son adultos voluntarios, mayores de 22
                        años que lideran y guían a las unidades del grupo,
                        aportando su experiencia y conocimiento.
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
                      <h4 className='info-title'>Sahásrara</h4>
                      <p className='description'>
                        Del sánscrito, significa "Mil Pétalos". Este chakra
                        simboliza la autorrealización y la conexión con un
                        propósito superior, reflejando la misión de los
                        dirigentes de inspirar y transformar vidas.
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
                      <h4 className='info-title'>Dirigentes Sahásrara</h4>
                      <p className='description'>
                        Juntos representan el equilibrio perfecto entre el
                        servicio, la enseñanza y el crecimiento continuo.
                      </p>
                    </div>
                  </div>
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

export default Adultos
