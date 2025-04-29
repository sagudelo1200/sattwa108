import Subpage from 'layouts/Subpage'
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Badge,
} from 'reactstrap'

const Grupo = () => {
  return (
    <Subpage title='Grupo Scout'>
      <div className='photo-container text-center'>
        <img
          alt='Flor de Lis Grupo Scout Sattwa 108'
          src={
            require(`assets/img/flores/grupo_sin_texto_sin_fondo.png`).default
          }
          width='309px'
        ></img>
      </div>
      <h1 className='text-center title title'>Grupo Scout Sattwa 108</h1>
      <h4 className='text-center'>Cultivando un mejor mañana.</h4>
      <Container className='text-center'>
        {/* Quienes Somos */}
        <section className='section py-2'>
          <h2 className='title'>¿Quiénes somos?</h2>
          <Row className='justify-content-center align-items-center'>
            <Col md='10' className='text-left'>
              <p>
                El Grupo Scout Sattwa tiene como misión cultivar el equilibrio y
                el desarrollo integral de sus miembros. Inspirados en
                tradiciones ancestrales y en los valores del escultismo,
                ofrecemos un marco simbólico único que guía a niños, niñas,
                adolescentes y jóvenes en su camino hacia la autorrealización.
                <br />
                <br />
                Nuestro nombre, <b>Sattwa</b>, proviene del sánscrito y
                representa el balance perfecto entre dos fuerzas opuestas:{' '}
                <b>Tamas</b> (la inercia) y <b>Rajas </b>
                (el movimiento). Este equilibrio define nuestras actividades y
                nuestra formación, creando un espacio donde cada miembro pueda
                crecer en armonía consigo mismo y con su entorno.
                <br />
                <br />
                Desde nuestra fundación, hemos construido una identidad única
                que conecta profundamente con los valores scout y las etapas de
                desarrollo personal. Cada unidad de nuestro grupo está vinculada
                a principios simbólicos que facilitan el aprendizaje
                significativo y promueven el liderazgo, la creatividad y el
                servicio comunitario.
              </p>
            </Col>
          </Row>
        </section>

        {/* Propósito */}
        <section className='section py-2'>
          <Row className='justify-content-center align-items-center text-left'>
            <Col md='10'>
              <h2 className='title text-center'>Propósito del Grupo</h2>
              <p>
                El Grupo Scout Sattwa tiene como propósito fundamental fomentar
                el desarrollo integral de sus integrantes a través de
                experiencias significativas y de alto impacto que los preparen
                para enfrentar los desafíos de la vida con equilibrio y
                confianza. Creemos que el escultismo es más que una serie de
                actividades al aire libre: es un viaje hacia la realización
                personal.
                <br />
                <br />
                Nuestro propósito se sustenta en tres pilares:
              </p>
              <ul className='text-left'>
                <li>
                  <p>
                    <b>Equilibrio Personal:</b>
                    <br />
                    Ayudamos a cada integrante a cultivar un balance entre sus
                    emociones, pensamientos y acciones a través de actividades
                    simbólicas, reflexivas y prácticas al aire libre.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Crecimiento Colectivo:</b>
                    <br />
                    Fomentamos la hermandad scout, donde cada unidad se
                    convierte en un espacio seguro para compartir valores,
                    construir lazos significativos y trabajar en equipo.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Transformación Social:</b>
                    <br />
                    Formamos ciudadanos activos, responsables, comprometidos con
                    sus comunidades y conscientes de su papel en la protección
                    del medio ambiente, inspirando cambios positivos en su
                    entorno.
                  </p>
                </li>
              </ul>
              <p>
                Al adoptar un marco simbólico único basado en los chakras y las
                filosofías orientales, nuestro grupo guía a sus miembros en un
                viaje de autodescubrimiento y contribución al bien común.
              </p>
            </Col>
          </Row>
        </section>

        {/* Marco Simbólico */}
        <section className='section py-2'>
          <Row className='justify-content-center align-items-center text-left'>
            <Col md='10'>
              <h2 className='title text-center'>Marco Simbólico</h2>
              <p>
                El marco simbólico del Grupo Scout Sattwa es la esencia que da
                vida a nuestras actividades y tradiciones. Inspirado en los
                chakras y en la riqueza filosófica del Yôga, Tantra y Sámkhya,
                proporciona un enfoque único y profundo para el crecimiento de
                nuestros integrantes.
              </p>

              <h3 className='title mb-2'>Los Chakras y las Unidades</h3>
              <p>
                La palabra chakra es un término sánscrito que se refiere a los
                centros de fuerza / conductos de energía situados en todo el
                cuerpo humano y especialmente a lo largo de la columna
                vertebral, donde se encuentran los siete principales: múládhára,
                swádhisthána, manipura, anahata, vishuddha, ájña y sahásrara.
                <br />
                <br />
                Por otro lado, las unidades corresponden a la división de
                cualquier grupo scout por edades, generando grupos más pequeños
                y con mejor empatía entre sus integrantes, ya que estos se
                convierten en <b>grupos naturales</b>.
                <br />
                <br />
                Cada unidad scout dentro del grupo está conectada con uno de los
                siete principales chakras, representando una etapa de desarrollo
                personal:
              </p>
              <Container>
                <Row className='justify-content-center'>
                  <Col md='4'>
                    <Card className='card-testimonial my-2 card-plain'>
                      <div className='card-avatar'>
                        <a
                          href='#sattwa108'
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt='...'
                            className='img img-raised rounded'
                            src={
                              require('assets/img/flores/familia_texto_fondo_entero.png')
                                .default
                            }
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <CardTitle tag='h3'>
                          Familia
                          <br />
                          Múládhára
                        </CardTitle>
                        <h6 className='category text-info'>de 5 a 7 años</h6>
                        <p className='card-description'>
                          Fundamento y estabilidad, simbolizando las raíces y la
                          conexión con la tierra.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='4'>
                    <Card className='card-testimonial my-2 card-plain'>
                      <div className='card-avatar'>
                        <a
                          href='#sattwa108'
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt='...'
                            className='img img-raised rounded'
                            src={
                              require('assets/img/flores/manada_texto_fondo_entero.png')
                                .default
                            }
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <CardTitle tag='h3'>
                          Manada
                          <br />
                          Swádhisthána
                        </CardTitle>
                        <h6 className='category text-info'>de 7 a 10 años</h6>
                        <p className='card-description'>
                          Creatividad y resiliencia, enfocándose en el
                          descubrimiento de habilidades y el trabajo en equipo.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='4'>
                    <Card className='card-testimonial my-2 card-plain'>
                      <div className='card-avatar'>
                        <a
                          href='#sattwa108'
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt='...'
                            className='img img-raised rounded'
                            src={
                              require('assets/img/flores/aldea_texto_fondo_entero.png')
                                .default
                            }
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <CardTitle tag='h3'>
                          Aldea
                          <br />
                          Manipura
                        </CardTitle>
                        <h6 className='category text-info'>de 10 a 12 años</h6>
                        <p className='card-description'>
                          Fuerza interior y confianza, destacando el desarrollo
                          de la autonomía y la voluntad.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='4'>
                    <Card className='card-testimonial my-2 card-plain'>
                      <div className='card-avatar'>
                        <a
                          href='#sattwa108'
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt='...'
                            className='img img-raised rounded'
                            src={
                              require('assets/img/flores/scouts_texto_fondo_entero.png')
                                .default
                            }
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <CardTitle tag='h3'>
                          Tropa
                          <br />
                          Anahata
                        </CardTitle>
                        <h6 className='category text-info'>de 10 a 15 años</h6>
                        <p className='card-description'>
                          Emociones y equilibrio, promoviendo la empatía y las
                          relaciones saludables.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='4'>
                    <Card className='card-testimonial my-2 card-plain'>
                      <div className='card-avatar'>
                        <a
                          href='#sattwa108'
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt='...'
                            className='img img-raised rounded'
                            src={
                              require('assets/img/flores/sociedad_texto_fondo_entero.png')
                                .default
                            }
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <CardTitle tag='h3'>
                          Sociedad
                          <br />
                          Vishuddha
                        </CardTitle>
                        <h6 className='category text-info'>de 15 a 18 años</h6>
                        <p className='card-description'>
                          Expresión y purificación, ayudando a los jóvenes a
                          desarrollar su pensamiento crítico y habilidades
                          comunicativas.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='4'>
                    <Card className='card-testimonial my-2 card-plain'>
                      <div className='card-avatar'>
                        <a
                          href='#sattwa108'
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt='...'
                            className='img img-raised rounded'
                            src={
                              require('assets/img/flores/clan_texto_fondo_entero.png')
                                .default
                            }
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <CardTitle tag='h3'>
                          Clan
                          <br />
                          Ajña
                        </CardTitle>
                        <h6 className='category text-info'>de 18 a 22 años</h6>
                        <p className='card-description'>
                          Intuición y toma de decisiones, preparando a los
                          jóvenes para enfrentar desafíos y liderar con
                          sabiduría.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='4'>
                    <Card className='card-testimonial my-2 card-plain'>
                      <div className='card-avatar'>
                        <a
                          href='#sattwa108'
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt='...'
                            className='img img-raised rounded'
                            src={
                              require('assets/img/flores/grupo_texto_fondo_entero.png')
                                .default
                            }
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <CardTitle tag='h3'>
                          Dirigentes
                          <br />
                          Sahásrara
                        </CardTitle>
                        <h6 className='category text-info'>+22 años</h6>
                        <p className='card-description'>
                          Autorrealización y liderazgo, simbolizando el logro de
                          un estado de hiperconciencia y servicio a los demás.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>

              <Container>
                <Row className='justify-content-center'>
                  <Col md='6'>
                    <Card>
                      <CardBody className='text-center'>
                        <h4 className='card-title title p-0'>La Flor de Lis</h4>
                        <img
                          src={
                            require('assets/img/flores/grupo_fondo_entero.png')
                              .default
                          }
                          alt='Pañoleta'
                          className='card-img-top'
                          style={{ height: '171px', width: 'auto' }}
                        />
                        <CardText className='text-left'>
                          La flor de lis representa <b>Sahasrara</b>, el séptimo
                          chakra, cuyo nombre significa "mil pétalos". Este
                          símbolo concentra la energía de todos los chakras,
                          reflejando cómo el grupo canaliza la fuerza y las
                          virtudes de cada unidad para alcanzar la
                          autorrealización colectiva.
                          <br />
                          <br />
                          Los mil pétalos de Sahasrara se distribuyen en 20
                          filas de 50, simbolizando la riqueza y diversidad de
                          experiencias compartidas dentro del grupo. Además, la
                          flor de lis es el emblema del movimiento scout,
                          conectando los principios universales del escultismo
                          con la espiritualidad y el equilibrio promovidos en el
                          Grupo Scout Sattwa.
                          <br />
                          <span className='d-block w-100 text-right mt-4'>
                            <small
                              className='btn btn-sm btn-outline-info m-0 p-0 px-1'
                              onClick={() =>
                                alert('Proxima funcionalidad: Ver componentes')
                              }
                            >
                              Ver componentes
                            </small>
                          </span>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md='6'>
                    <Card>
                      <CardBody className='text-center'>
                        <h4 className='card-title title p-0'>La Pañoleta</h4>
                        <img
                          src={require('assets/img/panoleta_108.png').default}
                          alt='Pañoleta'
                          className='card-img-top'
                          style={{ height: '171px', width: 'auto' }}
                        />
                        <CardText className='text-left'>
                          La pañoleta simboliza el camino personal de cada
                          integrante dentro del grupo.
                          <br />
                          Abierta, representa los pétalos de una flor de loto;
                          cerrada, guarda la energía y las experiencias
                          compartidas.
                          <br />
                          <br />
                          <b>Sus colores representan:</b>
                          <br />
                          <br />
                          <b>Gris</b>: Las raíces, que reflejan los valores,
                          principios y el contexto de donde proviene cada
                          persona.
                          <br />
                          <br />
                          <b>Blanco</b>: La realización personal y las metas
                          hacia las que se dirige.
                          <br />
                          <br />
                          En esencia, la pañoleta es el equilibrio entre “de
                          dónde vienes” y “hacia dónde vas”.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>

              <h3 className='title mb-2'>Arquetipos</h3>
              <p>
                Las unidades del grupo están asociadas con arquetipos que
                representan una cualidad o virtud a desarrollar. Estos
                arquetipos guían las actividades y ceremonias de cada unidad,
                brindando un marco simbólico para el crecimiento personal y
                colectivo.
              </p>
              <Container>
                <Row className='justify-content-center'>
                  <Col md='6' className='m-auto'>
                    <Card
                      className='card-background card-background-product card-raised'
                      style={{
                        backgroundImage:
                          'url(' +
                          require('assets/img/arquetipos/dalle/shiva.png')
                            .default +
                          ')',
                      }}
                    >
                      <CardBody>
                        <CardTitle tag='h2'>Shiva</CardTitle>
                        <p className='card-description'>
                          Shiva es el destructor y regenerador del universo,
                          simbolizando los ciclos de cambio necesarios para el
                          crecimiento personal. Su tridente (trishula)
                          representa la creación, el mantenimiento y la
                          destrucción, mientras que su tercer ojo simboliza la
                          sabiduría y la percepción más allá de lo evidente. En
                          el grupo, Shiva está asociado con los dirigentes,
                          quienes guían con sabiduría, disciplina y compasión.
                        </p>
                        <Badge className='badge-neutral'>
                          Para el liderazgo y la guía
                        </Badge>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='6' className='m-auto'>
                    <Card
                      className='card-background card-background-product card-raised'
                      style={{
                        backgroundImage:
                          'url(' +
                          require('assets/img/arquetipos/dalle/saraswati.png')
                            .default +
                          ')',
                      }}
                    >
                      <CardBody>
                        <CardTitle tag='h2'>Saraswati</CardTitle>
                        <p className='card-description'>
                          La diosa de la sabiduría y el arte, Saraswati
                          simboliza el aprendizaje continuo y la expresión
                          creativa. Con sus cuatro brazos, sostiene un libro, un
                          rosario, una olla de agua y una veena (instrumento
                          musical), representando los elementos esenciales del
                          conocimiento y la espiritualidad. En el grupo,
                          Saraswati inspira a los integrantes a explorar sus
                          talentos, aprender y compartir su sabiduría.
                        </p>
                        <Badge className='badge-neutral'>
                          para el conocimiento y la creatividad
                        </Badge>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='6' className='m-auto'>
                    <Card
                      className='card-background card-background-product card-raised'
                      style={{
                        backgroundImage:
                          'url(' +
                          require('assets/img/arquetipos/dalle/parvati.png')
                            .default +
                          ')',
                      }}
                    >
                      <CardBody>
                        <CardTitle tag='h2'>Parvati</CardTitle>
                        <p className='card-description'>
                          Parvati, la consorte de Shiva, encarna la energía
                          femenina, el equilibrio y la capacidad de nutrir. Como
                          madre de Ganesha y Kartikeya, representa el vínculo
                          entre la creación y la protección. Su figura inspira a
                          los líderes a actuar con compasión y fortaleza,
                          promoviendo la unidad y el desarrollo colectivo.
                        </p>
                        <Badge className='badge-neutral'>
                          Para el equilibrio y la armonía
                        </Badge>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='6' className='m-auto'>
                    <Card
                      className='card-background card-background-product card-raised'
                      style={{
                        backgroundImage:
                          'url(' +
                          require('assets/img/arquetipos/dalle/durga.png')
                            .default +
                          ')',
                      }}
                    >
                      <CardBody>
                        <CardTitle tag='h2'>Durgá</CardTitle>
                        <p className='card-description'>
                          La diosa de la victoria del bien sobre el mal, Durgá
                          es una figura protectora que enfrenta y supera los
                          retos con determinación. Montando un tigre o león, y
                          con múltiples brazos portando armas, Durgá inspira
                          coraje y acción en los momentos difíciles, ayudando a
                          los integrantes a enfrentar sus miedos y superar
                          obstáculos.
                        </p>
                        <Badge className='badge-neutral'>
                          para la protección, fuerza y resiliencia
                        </Badge>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='6' className='m-auto'>
                    <Card
                      className='card-background card-background-product card-raised'
                      style={{
                        backgroundImage:
                          'url(' +
                          require('assets/img/arquetipos/dalle/vayu.png')
                            .default +
                          ')',
                      }}
                    >
                      <CardBody>
                        <CardTitle tag='h2'>Váyu</CardTitle>
                        <p className='card-description'>
                          Dios del viento y del aliento vital, Váyu simboliza la
                          energía que fluye a través de todo ser vivo. Como
                          padre de Hanuman, Váyu representa la fuerza y la
                          valentía necesarias para enfrentar desafíos,
                          promoviendo la exploración, el movimiento y la
                          conexión con la naturaleza y las emociones.
                        </p>
                        <Badge className='badge-neutral'>
                          para el movimiento, libertad y acción
                        </Badge>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='6' className='m-auto'>
                    <Card
                      className='card-background card-background-product card-raised'
                      style={{
                        backgroundImage:
                          'url(' +
                          require('assets/img/arquetipos/dalle/nishakara.png')
                            .default +
                          ')',
                      }}
                    >
                      <CardBody>
                        <CardTitle tag='h2'>Nishakara</CardTitle>
                        <p className='card-description'>
                          El dios de la luna, Nishakara simboliza la luz en la
                          oscuridad, la intuición y la conexión con el mundo
                          espiritual. Su ciclo lunar refleja los ciclos de la
                          vida y la naturaleza, inspirando a los integrantes a
                          explorar su mundo interno y a conectar con su
                          intuición y sabiduría.
                        </p>
                        <Badge className='badge-neutral'>
                          para la intuición y la conexión espiritual
                        </Badge>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md='6' className='m-auto'>
                    <Card
                      className='card-background card-background-product card-raised'
                      style={{
                        backgroundImage:
                          'url(' +
                          require('assets/img/arquetipos/sadhu.png').default +
                          ')',
                      }}
                    >
                      <CardBody>
                        <CardTitle tag='h2'>Sadhú</CardTitle>
                        <p className='card-description'>
                          El asceta errante, Sadhú representa la búsqueda de la
                          verdad y la renuncia a los deseos mundanos. Su vida
                          sencilla y desapegada inspira a los integrantes a
                          reflexionar sobre sus valores y prioridades, buscando
                          la sabiduría y la paz interior.
                        </p>
                        <Badge className='badge-neutral'>
                          para la renuncia y la sabiduría
                        </Badge>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </section>
      </Container>
    </Subpage>
  )
}

export default Grupo
