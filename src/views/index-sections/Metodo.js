import { Container, Row, Col } from 'reactstrap'

const Metodo = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md='7' className='mx-auto text-center mt-0'>
            <h2 className='title'>El Método Scout</h2>
            <p>
              El Método Scout es un sistema esencial y único para la
              autoeducación progresiva, basado en la&nbsp;
              <a
                href='https://es.wikipedia.org/wiki/ley_scout'
                target='_blank'
                rel='noreferrer'
              >
                Ley
              </a>{' '}
              y la{' '}
              <a
                href='https://es.wikipedia.org/wiki/promesa_scout'
                target='_blank'
                rel='noreferrer'
              >
                Promesa
              </a>
              &nbsp;Scout. Aplica varios elementos que apoyan el propósito y los
              principios del&nbsp;
              <a
                href='https://es.wikipedia.org/wiki/escultismo'
                target='_blank'
                rel='noreferrer'
              >
                escultismo
              </a>
              , y crea un sistema cohesivo y equilibrado para que los jóvenes
              experimenten su verdadero potencial y se conviertan en ciudadanos
              activos, a medida que obtendrán aprendizaje y habilidades para
              toda la vida basados en valores compartidos, educación, diversión,
              hermandad y disfrute.
            </p>
          </Col>
        </Row>
        <Row className='align-items-center justify-content-center'>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-tertiary icon-circle'>
                <i className='fas fa-signature' />
              </div>
              <h4 className='info-title'>Adhesión Voluntaria</h4>
              <p className='description hover-tertiary'>
                La Promesa Scout es una fórmula de adhesión personal, libre y
                voluntaria, al estilo de vida que propone la Ley. Es un
                compromiso personal ante una comunidad que también se compromete
                a apoyar y a exigir.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-primary icon-circle'>
                <i className='fas fa-fist-raised' />
              </div>
              <h4 className='info-title'>Educación Através de la Acción</h4>
              <p className='description hover-primary'>
                El Escultismo propone el método de aprender haciendo, que parte
                desde los dinamismos naturales de los niños y jóvenes, de sus
                intereses, de sus deseos y sus sueños; para convertirlos en
                aventuras entusiasmantes.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-info icon-circle'>
                <i className='fas fa-users' />
              </div>
              <h4 className='info-title'>Pertenencia a Pequeños Grupos</h4>
              <p className='description hover-info'>
                Cada uno necesita de los demás para realizarse como persona. El
                Escultismo desarrolla este dinamismo social a través la
                pertenencia a pequeños grupos donde cada integrante se hace
                responsable de una tarea frente a sus compañeros.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-danger icon-circle'>
                <i className='fas fa-sort-amount-up' />
              </div>
              <h4 className='info-title'>Programas de Progresión Personal</h4>
              <p className='description hover-danger'>
                Toda persona está llamada a ser libre, a desarrollar plenamente
                su potencial personal y a ser responsable de su desarrollo. Cada
                actividad es un llamado a crecer porque propone un desafío e
                invita a plantearse metas y compromisos, según la edad, con el
                fin de desarrollar la vocación personal.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-tertiary icon-circle'>
                <i className='fas fa-people-carry' />
              </div>
              <h4 className='info-title'>
                Orientación y Acompañamiento Adulto
              </h4>
              <p className='description hover-tertiary'>
                El proceso educativo scout sólo es posible en la medida en que
                existan adultos responsables de su puesta en práctica. El
                voluntario adulto participa activamente de ese proceso
                compartiendo las actividades con los jóvenes y generando
                espacios que permitan vivenciar los valores que propone el
                movimiento.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-success icon-circle'>
                <i className='fas fa-tree' />
              </div>
              <h4 className='info-title'>
                Aire Libre y Contacto con la Naturaleza
              </h4>
              <p className='description hover-success'>
                La naturaleza es el espacio privilegiado de las actividades del
                Movimiento Scout. Su objetivo es integrar al joven como sujeto
                activo y respetuoso del medio natural. El conocimiento y
                aceptación de otros seres vivos es fundamento para el respeto,
                la tolerancia y la convivencia solidaria en la sociedad humana.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-info icon-circle'>
                <i className='fas fa-people-group' />
              </div>
              <h4 className='info-title'>Vida Comunitaria</h4>
              <p className='description hover-info'>
                Se brindan espacios de exploración activa y compromiso con las
                comunidades y el mundo en general, fomentando un mayor aprecio y
                comprensión entre las personas.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-warning icon-circle'>
                <i className='fas fa-wand-magic-sparkles' />
              </div>
              <h4 className='info-title'>Marco Simbólico</h4>
              <p className='description hover-warning'>
                Se trabaja sobre una estructura unificadora de temas y símbolos
                para facilitar el aprendizaje y el desarrollo de una identidad
                única como Scout.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Metodo
