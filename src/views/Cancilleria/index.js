import Subpage from 'layouts/Subpage'
import {
  Card,
  Col,
  Container,
  Row,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap'

// veneras de la orden al merito
import VeneraBhumiChandra from 'assets/img/veneras/bhumi_chandra.png'
import VeneraVarunaChandra from 'assets/img/veneras/varuna_chandra.png'
import VeneraAgniChandra from 'assets/img/veneras/agni_chandra.png'
import VeneraVayuChandra from 'assets/img/veneras/vayu_chandra.png'
import VeneraAkashaChandra from 'assets/img/veneras/akasha_chandra.png'
import VeneraSamadhiChandra from 'assets/img/veneras/samadhi_chandra.png'

// chakras blanco y negro
import ChakraMuladhara from 'assets/img/flaticon/chakras/muladhara.png'
import ChakraSwadhisthana from 'assets/img/flaticon/chakras/swadhisthana.png'
import ChakraManipura from 'assets/img/flaticon/chakras/manipura.png'
import ChakraAnahata from 'assets/img/flaticon/chakras/anahata.png'
import ChakraVishuddha from 'assets/img/flaticon/chakras/vishuddha.png'
import ChakraAjna from 'assets/img/flaticon/chakras/ajna.png'

// medallas
import MedallaVarunaChandra from 'assets/img/veneras/medalla_varuna.png'
import MedallaVayuChandra from 'assets/img/veneras/medalla_vayu.png'
import MedallaSamadhiChandra from 'assets/img/veneras/medalla_samadhi.png'

// collares
import CollarJefe from 'assets/img/veneras/collar_jefe.png'
import CollarCanciller from 'assets/img/veneras/collar_canciller.png'

function Cancilleria() {
  return (
    <Subpage title='Cancillería'>
      <Container className='text-center'>
        <h1>
          <b>Cancillería Sattwa 108</b>
        </h1>
        <section className='section p-0'>
          <h2 className='title'>¿Qué es la Cancillería?</h2>
          <Row className='justify-content-center align-items-center'>
            <Col md='10' className='text-left'>
              <p>
                Es la instancia encargada de custodiar, promover y otorgar
                diferentes reconocimientos, como la{' '}
                <b>Orden al Mérito "ANANDA" – Felicidad Inefable</b>, la más
                alta condecoración interna del grupo. Estas distinciones
                reconocen a los miembros activos del grupo que se destacan por
                su{' '}
                <b>
                  espíritu, mística y ejemplo viviente de la Ley y la Promesa
                  Scout
                </b>
                , alineados con la misión y visión del escultismo y el marco
                simbólico del grupo.
              </p>
            </Col>
          </Row>
        </section>

        <section className='section p-0'>
          <Row className='justify-content-center align-items-center'>
            <Col md='10' className='text-left'>
              <h2 className='title text-center'>
                Orden al Mérito "Ananda" - Felicidad Inefable
              </h2>
              <p>
                La <b>Orden al Mérito "Ananda"</b> del Grupo Scout Sattwa 108
                fue instituida con el objetivo de{' '}
                <b>reconocer y estimular el trabajo de los miembros activos</b>{' '}
                que encarnan el ideal Sattwa a través del servicio, la
                superación y el crecimiento espiritual.
              </p>
              <p>
                Esta orden se otorga siguiendo los principios del{' '}
                <b>Marco Simbólico del grupo</b>, respetando los significados,
                símbolos y terminologías descritas en su manual. Incluye
                reconocimientos tanto para miembros scouts como para personas
                externas que han contribuido significativamente al desarrollo
                del grupo.
              </p>
            </Col>

            <Col md='10' className='text-left'>
              <h3 className='title mb-1'>Grados de la Orden "Ananda"</h3>
              <p>
                La Orden al Mérito está estructurada en{' '}
                <b>seis grados progresivos</b>, cada uno asociado a un{' '}
                <b>chakra</b>, un <b>elemento</b> y{' '}
                <b>una etapa del camino de realización personal</b>. El paso a
                grados superiores requiere una antigüedad mínima de dos años en
                el grado anterior y una nueva motivación distinta a la ya
                reconocida.
              </p>
              <p>
                Cada grado cuenta con una <b>venera</b> distintiva con colores
                específicos, el símbolo del <b>Tripuṇḍra</b> (tres líneas
                horizontales) y una media luna, elementos que evocan la
                espiritualidad de Shiva y la energía Kundaliní.
              </p>
              <Row className='justify-content-center align-items-center'>
                <Col xs='9' sm='6' md='4' className='text-center'>
                  <Card style={{ border: 'solid 3px #899A69' }}>
                    <CardTitle
                      tag='h5'
                      className='mb-0'
                      style={{ color: '#899A69' }}
                    >
                      <b>Bhumi Chandra</b>
                      <br />
                      <small className='text-muted'>Luna de Tierra</small>
                    </CardTitle>
                    <CardBody className='pt-0'>
                      <CardImg
                        alt='Venera Bhumi Chandra'
                        src={VeneraBhumiChandra}
                      />
                      <CardText className='mt-2'>
                        Representa las bases, la estabilidad y la conexión con
                        la energía de la Tierra.
                      </CardText>
                      <img
                        alt='Chakra Muladhara'
                        src={ChakraMuladhara}
                        width={'39px'}
                      />
                      <br />
                      <small className='text-muted'>Muladhara</small>
                    </CardBody>
                  </Card>
                </Col>

                <Col xs='9' sm='6' md='4' className='text-center'>
                  <Card style={{ border: 'solid 3px #4C6B8A' }}>
                    <CardTitle>
                      <img
                        alt='Chakra Swadhisthana'
                        src={ChakraSwadhisthana}
                        width={'39px'}
                      />
                      <br />
                      <small className='text-muted'>Manipura</small>
                    </CardTitle>

                    <CardBody className='pt-0'>
                      <CardImg alt='...' src={VeneraVarunaChandra} />
                      <CardText
                        tag={'h5'}
                        className='mb-0'
                        style={{ color: '#4C6B8A' }}
                      >
                        <b>Varuna Chandra</b>
                        <br />
                        <small className='text-muted'>Luna de Agua</small>
                      </CardText>
                      <CardText className='mt-2'>
                        Reconoce aspectos fundamentales del ser, la corporalidad
                        y el fluir.
                      </CardText>
                      <img
                        alt='Medalla Varuna Chandra'
                        src={MedallaVarunaChandra}
                        height={'69px'}
                        className=''
                      />
                    </CardBody>
                  </Card>
                </Col>

                <Col xs='9' sm='6' md='4' className='text-center'>
                  <Card style={{ border: 'solid 3px #BF412E' }}>
                    <CardTitle
                      tag='h5'
                      className='mb-0'
                      style={{ color: '#BF412E' }}
                    >
                      <b>Agni Chandra</b>
                      <br />
                      <small className='text-muted'>Luna de Fuego</small>
                    </CardTitle>
                    <CardBody className='pt-0'>
                      <CardImg alt='...' src={VeneraAgniChandra} />
                      <CardText className='mt-2'>
                        Invita al manejo consciente de la energía y a la acción
                        transformadora en la vida.
                      </CardText>
                      <img
                        alt='Chakra Manipura'
                        src={ChakraManipura}
                        width={'39px'}
                      />
                      <br />
                      <small className='text-muted'>Manipura</small>
                    </CardBody>
                  </Card>
                </Col>

                <Col xs='9' sm='6' md='4' className='text-center'>
                  <Card style={{ border: 'solid 3px #80ABD1' }}>
                    <CardTitle>
                      <img
                        alt='Chakra Anahata'
                        src={ChakraAnahata}
                        width={'39px'}
                      />
                      <br />
                      <small className='text-muted'>Anahata</small>
                    </CardTitle>
                    <CardBody className='pt-0'>
                      <CardImg alt='...' src={VeneraVayuChandra} />
                      <CardText
                        tag={'h5'}
                        className='mb-0'
                        style={{ color: '#80ABD1' }}
                      >
                        <b>Vayu Chandra</b>
                        <br />
                        <small className='text-muted'>Luna de Aire</small>
                      </CardText>
                      <CardText className='mt-2'>
                        Representa el mundo emocional y la apertura al amor y la
                        compasión.
                      </CardText>
                      <img
                        alt='Medalla Vayu Chandra'
                        src={MedallaVayuChandra}
                        height={'69px'}
                        className=''
                      />
                      <br />
                    </CardBody>
                  </Card>
                </Col>

                <Col xs='9' sm='6' md='4' className='text-center'>
                  <Card style={{ border: 'solid 3px #D1D0D1' }}>
                    <CardTitle tag='h5' className='mb-0 text-muted'>
                      <b>Akasha Chandra</b>
                      <br />
                      <small className='text-muted'>Luna Etérea</small>
                    </CardTitle>
                    <CardBody className='pt-0'>
                      <CardImg
                        alt='Venera Akasha Chandra'
                        src={VeneraAkashaChandra}
                      />
                      <CardText className='mt-2'>
                        Expresa la pureza del pensamiento y la comunicación
                        auténtica.
                      </CardText>
                      <div className='text-center'>
                        <img
                          alt='Chakra Vishuddha'
                          src={ChakraVishuddha}
                          width={'39px'}
                        />
                        <br />
                        <small className='text-muted'>Vishuddha</small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col xs='9' sm='6' md='4' className='text-center'>
                  <Card style={{ border: 'solid 3px #8E699A' }}>
                    <CardTitle>
                      <img alt='Chakra Ajna' src={ChakraAjna} width={'39px'} />
                      <br />
                      <small className='text-muted'>Ajna</small>
                    </CardTitle>
                    <CardBody className='pt-0'>
                      <CardImg alt='...' src={VeneraSamadhiChandra} />
                      <CardText
                        tag={'h5'}
                        className='mb-0'
                        style={{ color: '#8E699A' }}
                      >
                        <b>Samadhi Chandra</b>
                        <br />
                        <small className='text-muted'>
                          Luna de la Hiperconsciencia
                        </small>
                      </CardText>
                      <CardText className='mt-2'>
                        Representa la intuición, la unión con el universo y la
                        hiperconsciencia.
                      </CardText>
                      <img
                        alt='Medalla Samadhi Chandra'
                        src={MedallaSamadhiChandra}
                        height={'69px'}
                      />
                      <br />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col md='10' className='text-left'>
              <h3 className='title mb-1'>Grados Vitalicios y Honoríficos</h3>
              <p>
                Además de los grados evolutivos, existen dos distinciones
                permanentes:
              </p>

              <Row className='justify-content-center align-items-center'>
                <Col md='5' className='text-center'>
                  <Card>
                    <CardTitle></CardTitle>
                    <CardBody className='pt-0'>
                      <img alt='...' src={CollarCanciller} width={'96px'} />
                      <CardText tag={'h5'} className='mb-0'>
                        <b>Collar de Canciller</b>
                        <br />
                        <small className='text-muted'>"Guru" (Maestro)</small>
                      </CardText>
                      <CardText className='mt-2'>
                        Entregado al <b>Canciller nombrado</b>, lo conserva
                        vitaliciamente. Su medalla incorpora el Tripuṇḍra y
                        media luna dorada, con cinta gris decorada con flores de
                        loto.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='5' className='text-center'>
                  <Card>
                    <CardTitle></CardTitle>
                    <CardBody className='pt-0'>
                      <img alt='...' src={CollarJefe} width={'108px'} />
                      <CardText tag={'h5'} className='mb-0'>
                        <b>Collar de Gran Maestre</b>
                        <br />
                        <small className='text-muted'>
                          "Mahaguru" (Gran Maestro)
                        </small>
                      </CardText>
                      <CardText className='mt-2'>
                        Concedido al <b>Jefe de Grupo en ejercicio</b>, y
                        también es vitalicio. Puede ser otorgado a
                        personalidades que representen el espíritu del
                        escultismo a gran escala.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </Subpage>
  )
}

export default Cancilleria
