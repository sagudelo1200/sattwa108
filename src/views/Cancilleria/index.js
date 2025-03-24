import Subpage from 'layouts/Subpage'
import { Col, Container, Row } from 'reactstrap'

function Cancilleria() {
  return (
    <Subpage title='Cancillería'>
      <Container className='text-center'>
        <h1>Cancillería Sattwa 108</h1>
        <section className='section p-0'>
          <h2 className='title'>¿Qué es la Cancillería?</h2>
          <Row className='justify-content-center align-items-center'>
            <Col md='10' className='text-left'>
              <p>
                La <b>Cancillería del Grupo Scout Sattwa 108</b> es el órgano
                encargado de reconocer y estimular el trabajo de los miembros
                del grupo que se destacan por su espíritu, mística y compromiso
                con la Ley y la Promesa Scout. A través de la{' '}
                <b>Orden al Mérito "Ananda" (Felicidad Inefable)</b> y otros
                reconocimientos, la Cancillería resalta la excelencia y el
                servicio dentro del escultismo.
              </p>
            </Col>
          </Row>
        </section>

        <section className='section p-0'>
          <Row className='justify-content-center align-items-center'>
            <Col md='10' className='text-left'>
              <h2 className='title text-center'>
                ¿Orden al Mérito "Ananda" (Felicidad Inefable)?
              </h2>
              <p>
                La <b>Orden al Mérito "Ananda"</b> es la máxima condecoración
                dentro del Grupo Scout Sattwa 108. Inspirada en el significado
                de "Ananda" – <b>"Felicidad Inefable"</b> – esta distinción
                honra a quienes encarnan los valores del escultismo y del marco
                simbólico del grupo.
              </p>
            </Col>
            <Col md='10' className='text-left'>
              <h3 className='title mb-1'>¿Quiénes pueden recibirla?</h3>
              <p>
                Está dirigida a miembros activos del grupo que han demostrado un
                compromiso excepcional con el escultismo y a personas o
                entidades que han apoyado significativamente la labor del grupo.
              </p>
            </Col>
            <Col md='10' className='text-left'>
              <h3 className='title mb-1'>Grados de la Condecoración</h3>
              <p>
                Cada grado de la Orden al Mérito está vinculado a los chakras y
                elementos del marco simbólico del grupo:
              </p>
              <ol>
                <li>
                  <b>Bhumi Chandra (Luna de Tierra)</b> – Primer grado,
                  representa las raíces y la estabilidad.
                </li>
                <li>
                  <b>Varuna Chandra (Luna de Agua)</b> – Segundo grado,
                  simboliza la fluidez y adaptación.
                </li>
                <li>
                  <b>Agni Chandra (Luna de Fuego)</b> – Tercer grado, vinculado
                  a la energía y la voluntad.
                </li>
                <li>
                  <b>Vayu Chandra (Luna de Aire)</b> – Cuarto grado, representa
                  el equilibrio emocional.
                </li>
                <li>
                  <b>Vayu Chandra (Luna de Aire)</b> – Quinto grado, vinculado a
                  la pureza del pensamiento.
                </li>
                <li>
                  <b>Samadhi Chandra (Luna de la Hiperconsciencia)</b> – Máximo
                  grado, representa la realización personal.
                </li>
              </ol>
              <p>
                Cada grado se otorga en reconocimiento al crecimiento, el
                servicio y la superación dentro del grupo.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </Subpage>
  )
}

export default Cancilleria
