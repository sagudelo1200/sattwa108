import React from 'react'

// reactstrap components
import { Card, Container, Row, Col, UncontrolledTooltip } from 'reactstrap'

import Subpage from 'layouts/Subpage'

function Servicios() {
  React.useEffect(() => {
    document.body.classList.add('landing-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('landing-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <Subpage>
      <div className='wrapper'>
        <div className='section section-about-us py-0 '>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title'>
                  Visítanos y Descubre la Experiencia Scout
                </h2>
                <h5 className='description'>
                  Hay cosas que solo se entienden cuando se viven. El escultismo
                  es una de ellas. Es la emoción de una fogata bajo las
                  estrellas, el trabajo en equipo para construir algo desde
                  cero, el orgullo de superar un reto y la satisfacción de dejar
                  una huella positiva en el mundo.
                </h5>
              </Col>
            </Row>
            <div className='separator separator-info'></div>
            <div className='section-story-overview'>
              <Row>
                <Col md='6'>
                  <div
                    className='image-container image-left'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/galeria/manada_saluda_bandera.jpg')
                          .default +
                        ')',
                    }}
                  >
                    <p className='blockquote blockquote-info fa-beat-fade'>
                      "Trata de dejar este mundo en mejores condiciones de como
                      lo encontraste." <br></br>
                      <br></br>
                      <small>Robert Baden-Powell</small>
                    </p>
                  </div>
                  <div
                    className='image-container image-left-bottom'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/galeria/aula.jpg').default +
                        ')',
                    }}
                  ></div>
                </Col>
                <Col md='5'>
                  <div
                    className='image-container image-right'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/galeria/ananda.jpg').default +
                        ')',
                    }}
                  ></div>
                  <h3 className='mt-3'>
                    <b>Estamos cultivando un mejor mañana, hoy.</b>
                  </h3>
                  <p>
                    En el <b>Grupo Scout Sattwa</b>, estamos{' '}
                    <b>cultivando un mejor mañana</b>, convencidos de que la
                    mejor manera de conocer el escultismo es viviéndolo. Cada
                    unidad, cada reunión, cada actividad y cada aventura se
                    convierten en experiencias que nos enseñan a crecer, servir
                    y construir un mundo mejor.
                  </p>
                  <p>
                    Nuestro grupo tiene la fortuna de desarrollarse en un
                    entorno único gracias a nuestra alianza con el{' '}
                    <b>Aula Ambiental Manzanares</b>, un espacio dedicado a la
                    educación ambiental y la sostenibilidad. Aquí, combinamos el
                    aprendizaje scout con iniciativas ecológicas que nos ayudan
                    a vivir en armonía con la naturaleza.
                  </p>
                  <p>
                    Si alguna vez has sentido curiosidad por el movimiento scout
                    o buscas un espacio donde niños, niñas, adolescentes y
                    jóvenes puedan crecer en valores, liderazgo y amor por la
                    naturaleza, ¡este es el lugar indicado!
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='9'>
                <h2 className='title'>Un Espacio con Propósito</h2>
                <h4 className='description'>
                  Cada rincón de nuestro entorno está pensado para fomentar el
                  conocimiento, la creatividad y la acción consciente. El parque
                  y el aula cuentan con diversas áreas donde exploramos y
                  ponemos en práctica valores como el respeto por el medio
                  ambiente y la autosuficiencia.
                </h4>
              </Col>
            </Row>
            <Row className='align-items-center'>
              <Col md='4'>
                <Card
                  className='card-background card-raised'
                  data-background-color=''
                  style={{
                    backgroundImage:
                      'url(' +
                      require('assets/img/freepik/monarca.png').default +
                      ')',
                  }}
                >
                  <div className='info'>
                    <div className='icon icon-white'>
                      <i className='fas fa-worm'></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Mariposario</h4>
                      <p>
                        Un espacio totalmente mágico, lleno de vida y
                        transformación donde podrás explorar el ciclo de las
                        mariposas y su papel en la biodiversidad.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card
                  className='card-background card-raised'
                  data-background-color=''
                  style={{
                    backgroundImage:
                      'url(' +
                      require('assets/img/freepik/riego.jpg').default +
                      ')',
                  }}
                >
                  <div className='info'>
                    <div className='icon icon-white'>
                      <i className='fas fa-cloud-showers-water'></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>
                        Agua lluvia y Sistema de Riego
                      </h4>
                      <p>
                        Aprende cómo aprovechar el agua de manera eficiente y
                        sostenible, cuidando el recurso más valioso de la
                        tierra.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card
                  className='card-background card-raised'
                  data-background-color=''
                  style={{
                    backgroundImage:
                      'url(' +
                      require('assets/img/freepik/acuaponia.jpg').default +
                      ')',
                  }}
                >
                  <div className='info'>
                    <div className='icon icon-white'>
                      <i className='fas fa-fish-fins'></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Acuaponía</h4>
                      <p>
                        Un ecosistema en el que peces y plantas trabajan en
                        equilibrio, mostrándonos un modelo innovador de
                        producción de alimentos.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card
                  className='card-background card-raised'
                  data-background-color=''
                  style={{
                    backgroundImage:
                      'url(' +
                      require('assets/img/freepik/huerta.jpg').default +
                      ')',
                  }}
                >
                  <div className='info'>
                    <div className='icon icon-white'>
                      <i className='fas fa-carrot'></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Huerta</h4>
                      <p>
                        Un laboratorio natural donde aprendemos sobre el cultivo
                        medicinal y de alimentos de manera sostenible y la
                        importancia de la alimentación consciente.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card
                  className='card-background card-raised'
                  data-background-color=''
                  style={{
                    backgroundImage:
                      'url(' +
                      require('assets/img/freepik/semillero.jpg').default +
                      ')',
                  }}
                >
                  <div className='info'>
                    <div className='icon icon-white'>
                      <i className='fas fa-seedling'></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Vivero y Semillero</h4>
                      <p>
                        Un espacio donde se cultivan árboles y plantas nativas
                        para la reforestación. Además, la Casa de Semillas
                        preserva especies esenciales para el ecosistema.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md='4'>
                <Card
                  className='card-background card-raised'
                  data-background-color=''
                  style={{
                    backgroundImage:
                      'url(' +
                      require('assets/img/freepik/panel.jpg').default +
                      ')',
                  }}
                >
                  <div className='info'>
                    <div className='icon icon-white'>
                      <i className='fas fa-solar-panel'></i>
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Panel Solar</h4>
                      <p>
                        Un sistema que proporciona energía limpia, nos enseña
                        sobre fuentes renovables no contaminantes y nos invita a
                        cuidar el planeta.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className='ml-auto mr-auto' md='10'>
                <h2 className='title text-center'>¿Cómo Puedes Visitarnos?</h2>
                <p className='description'>
                  Si quieres conocernos de cerca y ver cómo funciona el
                  escultismo en acción, ¡te invitamos a visitarnos! Puedes
                  asistir a una de nuestras reuniones habituales o agendar una
                  visita especial si representas a una escuela, una organización
                  o simplemente quieres explorar más sobre lo que hacemos.
                  <br />
                  <Container className='my-4'>
                    <div className='row d-flex justify-content-center align-items-center'>
                      <div className='col-12 col-md-5 mx-auto'>
                        <div className='location'>
                          <p className='mb-0'>
                            Sábados de 2:00 p.m. a 5:30 p.m.
                          </p>
                          <p className='mb-4'>
                            Aula Ambiental Manzanares
                            <br />
                            Comuna 15, Guayabal
                          </p>
                        </div>
                        <div className='socialmedia text-center'>
                          <a
                            href='https://wa.me/573217766319'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='tooltip838269962'
                            className='mx-3'
                          >
                            <img
                              src={
                                require('../../assets/img/whatsapp-logo.png')
                                  .default
                              }
                              alt='whatsapp logo'
                              width={32}
                            />
                          </a>
                          <UncontrolledTooltip target='tooltip838269962'>
                            Enviar Whatsapp
                          </UncontrolledTooltip>
                          <a
                            href='https://www.instagram.com/grupo.sattwa108/'
                            id='tooltip11233535'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Siguenos en Instagram'
                            className='mx-3'
                          >
                            <img
                              width={32}
                              alt='instagram logo'
                              src={
                                require('assets/img/instagram-logo.png').default
                              }
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip11233535'
                          >
                            Siguenos en Instagram
                          </UncontrolledTooltip>
                          <a
                            href='mailto:gruposcoutsattwa@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='tooltip532111601'
                            className='mx-3'
                          >
                            <img
                              src={
                                require('../../assets/img/gmail-logo.png')
                                  .default
                              }
                              alt='gmail logo'
                              width={32}
                            />
                          </a>
                          <UncontrolledTooltip target='tooltip532111601'>
                            Enviar correo electronico
                          </UncontrolledTooltip>
                        </div>
                      </div>
                      <div className='col-12 col-md-7 mx-auto'>
                        <div className='map mt-2'>
                          <iframe
                            title='ubicacion'
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.80048326819036!2d-75.58669823498761!3d6.210344732936774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88233ec2715d0135%3A0xc4107f06a3faaa5a!2sGrupo%20Scout%20Sattwa%20108!5e0!3m2!1ses!2sco!4v1734654271375!5m2!1ses!2sco'
                            width='90%'
                            height='200px'
                            style={{ border: 10 }}
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </Container>
                  <br />
                  No importa si vienes solo, con amigos o en familia, siempre
                  hay un lugar para ti. Ven y descubre lo que significa ser
                  scout y cómo cada actividad es una oportunidad para aprender,
                  crecer y dejar el mundo mejor de como lo encontramos.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='section section-contact-us pb-0 text-center'>
          <Container>
            <h2 className='title'>
              ¡Ser del Grupo Scout Sattwa 108 es una Experiencia Única!
            </h2>
            <h4 className='description'>
              Si aún tienes dudas, aquí dejamos <b>108</b> razones para unirte a
              nosotros:
            </h4>

            <Row className='justify-content-center align-items-center'>
              <Col className='text-center ml-auto mr-auto' md='6'>
                <h4 className='description'>Desarrollo Personal</h4>
                <ul className='text-left' style={{ listStyle: 'none' }}>
                  <li>1. Aprendes a ser independiente.</li>
                  <li>2. Desarrollas liderazgo desde jóven.</li>
                  <li>3. Descubres tu verdadero potencial</li>
                  <li>4. Mejoras tu autoconfianza.</li>
                  <li>5. Te conviertes en una persona resiliente.</li>
                  <li>6. Aprendes a manejar el estrés y la presión.</li>
                  <li>7. Fortaleces tu carácter.</li>
                  <li>8. Te vuelves más disciplinado.</li>
                  <li>9. Aprecias el esfuerzo y la perseverancia.</li>
                  <li>10. Aprendes a trabajar en equipo.</li>
                  <li>11. Desarrollas habilidades para resolver problemas.</li>
                  <li>12. Experimentas crecimiento espiritual y personal.</li>
                  <li>13. Vives el lema "Siempre Listos".</li>
                  <li>14. Mejoras tu comunicación y oratoria.</li>
                  <li>15. Aprendes a tomar decisiones acertadas.</li>
                  <li>16. Desarrollas pensamiento crítico.</li>
                  <li>17. Aprendesa ser puntual y responsable</li>
                  <li>18. Te conviertes en una persona confiable.</li>
                  <li>19. Fomentas una mentalidad positiva.</li>
                  <li>20. Aprendes a gestionar tu tiempo.</li>
                </ul>
              </Col>
              <Col className='text-center ml-auto mr-auto' md='6'>
                <h4 className='description'>Habilidades Prácticas</h4>
                <ul className='text-left' style={{ listStyle: 'none' }}>
                  <li>21. Aprendes a cocinar en el campo.</li>
                  <li>22. Conoces técnicas de supervivencia.</li>
                  <li>23. Aprendes a construir refugios.</li>
                  <li>24. Desarrollas habilidades de orientación.</li>
                  <li>25. Aprendes a hacer nudos y amarres.</li>
                  <li>26. Conoces técnicas de primeros auxilios.</li>
                  <li>27. Aprendes a hacer fuego de manera segura.</li>
                  <li>28. Desarrollas habilidades de campismo.</li>
                  <li>29. Aprendes a cuidar el medio ambiente.</li>
                  <li>30. Conoces técnicas de rescate y salvamento.</li>
                  <li>31. Aprendes a trabajar en altura.</li>
                  <li>32. Desarrollas habilidades de navegación.</li>
                  <li>33. Aprendes a hacer manualidades.</li>
                  <li>34. Conoces técnicas de agricultura y jardinería.</li>
                  <li>35. Aprendes a hacer trabajos manuales.</li>
                  <li>36. Dominas técnicas de senderismo seguras.</li>
                  <li>37. Aprendes a purificar agua.</li>
                  <li>38. Sabes que hacer en caso de emergencia.</li>
                  <li>39. Aprendes a hacer reparaciones básicas.</li>
                  <li>40. Conoces técnicas de defensa personal.</li>
                </ul>
              </Col>
              <Col className='text-center ml-auto mr-auto' md='6'>
                <h4 className='description'>Valores y Actitudes</h4>
                <ul className='text-left' style={{ listStyle: 'none' }}>
                  <li>41. Aprendes a ser solidario y servicial.</li>
                  <li>42. Desarrollas empatía y compasión.</li>
                  <li>43. Vives la honestidad y la integridad.</li>
                  <li>44. Aprendes a ser respetuoso y tolerante.</li>
                  <li>45. Fomentas la igualdad y la justicia.</li>
                  <li>46. Fomentas la gratitud y valoras lo que tienes.</li>
                  <li>47. Aprendes a ser humilde y sencillo.</li>
                  <li>48. Desarrollas la paciencia y la calma.</li>
                  <li>49. Sirves a los demás sin esperar nada a cambio.</li>
                  <li>50. Te conviertes en un ciudadano ejemplar.</li>
                  <li>51. Valoras la diversidad y la multiculturalidad.</li>
                  <li>52. Aprendes a cuidar y respetar la vida.</li>
                  <li>53. Tienes una brújula moral clara.</li>
                  <li>54. Desarrollas amor por la verdad.</li>
                  <li>55. Aprendes a ser un buen amigo.</li>
                  <li>56. Fomentas la paz y la armonía.</li>
                  <li>57. Aprendes a perdonar y a pedir perdón.</li>
                  <li>58. Desarrollas la generosidad y la bondad.</li>
                  <li>59. Te haces responsable de tus actos.</li>
                  <li>60. Aprendes a ser un líder servicial.</li>
                </ul>
              </Col>
              <Col className='text-center ml-auto mr-auto' md='6'>
                <h4 className='description'>Amistad y Comunidad</h4>
                <ul className='text-left' style={{ listStyle: 'none' }}>
                  <li>61. Conoces personas de todo el mundo.</li>
                  <li>62. Haces amigos para toda la vida.</li>
                  <li>63. Te sientes parte de algo más grande que tú.</li>
                  <li>64. Vives la diversidad y la inclusión.</li>
                  <li>65. Compartes experiencias únicas.</li>
                  <li>66. Te diviertes y haces actividades emocionantes.</li>
                  <li>67. Participas en proyectos de impacto social.</li>
                  <li>68. Te sientes apoyado y acompañado.</li>
                  <li>69. Celebras la amistad y el compañerismo.</li>
                  <li>70. Compartes valores y sueños con otros.</li>
                  <li>71. Creas lazos de hermandad inquebrantables.</li>
                  <li>72. Tienes una red de apoyo en todo el mundo.</li>
                  <li>73. Vives la solidaridad y la cooperación.</li>
                  <li>74. Aprendes a confiar en los demás.</li>
                  <li>75. Formas parte de una comunidad que deja huella.</li>
                  <li>76. Enseñas y aprendes de otros scouts.</li>
                  <li>77. Te conviertes en un ciudadano activo global.</li>
                  <li>78. Vives el sentido de pertenencia y compromiso.</li>
                  <li>79. Sientes que puedes cambiar el mundo.</li>
                  <li>80. Siempre podrás ser tú mismo.</li>
                </ul>
              </Col>
              <Col className='text-center ml-auto mr-auto' md='6'>
                <h4 className='description'>Vida al Aire Libre</h4>
                <ul className='text-left' style={{ listStyle: 'none' }}>
                  <li>81. Conoces y respetas la naturaleza.</li>
                  <li>
                    82. Aprendes a vivir en armonía con el medio ambiente.
                  </li>
                  <li>83. Te conectas con la tierra y el cielo.</li>
                  <li>84. Desarrollas amor por la naturaleza.</li>
                  <li>85. Aprendes a cuidar y proteger el planeta.</li>
                  <li>86. Vives la aventura y la emoción al aire libre.</li>
                  <li>87. Te sientes uno con el Universo.</li>
                  <li>88. Aprendes a sobrevivir en la naturaleza.</li>
                  <li>89. Descubres la belleza y la magia que te rodea.</li>
                  <li>90. Te conviertes en un guardián de la naturaleza.</li>
                  <li>91. Aprendes a respetar y valorar la vida silvestre.</li>
                  <li>92. Te sientes en paz y en equilibrio con el mundo.</li>
                  <li>
                    93. Te desconectas en el placer de caminar por el bosque.
                  </li>
                  <li>94. Obtienes una mentalidad ecológica y sostenible.</li>
                  <li>95. Aprendes a vivir con lo esencial y lo necesario.</li>
                  <li>96. Tomas conciencia de tu impacto en el planeta.</li>
                  <li>97. Disfrutas los sonidos y colores de la naturaleza.</li>
                  <li>98. Descubres lugares increíbles y secretos.</li>
                  <li>99. Duermes bajo las estrellas y te sientes libre.</li>
                  <li>100. Aprecias la belleza de los pequeños detalles.</li>
                </ul>
              </Col>
              <Col className='text-center ml-auto mr-auto' md='6'>
                <h4 className='description'>Experiencias Inolvidables</h4>
                <ul className='text-left' style={{ listStyle: 'none' }}>
                  <li>101. Participas de campamentos inolvidables.</li>
                  <li>102. Te enfrentas a desafíos que te hacen crecer.</li>
                  <li>
                    103. Vives la emoción de una fogata bajo las estrellas.
                  </li>
                  <li>
                    104. Aprecias canciones, historias y tradiciones scouts.
                  </li>
                  <li>
                    105. Cada día es una aventura y una nueva oportunidad.
                  </li>
                  <li>
                    106. Encuentras inspiración en la historia del movimiento
                    scout.
                  </li>
                  <li>107. Te sientes vivo, útil y en armonía con el mundo.</li>
                  <li>108. Haces de los valores scout tu forma de vida.</li>
                </ul>
              </Col>
            </Row>
          </Container>
          <h4 className='mt-4 fa-beat'>
            <b>
              🔥¡Ser Scout es una de las mejores decisiones que puedes tomar!🔥
            </b>
          </h4>
        </div>
      </div>
    </Subpage>
  )
}

export default Servicios
