import React from 'react'

// reactstrap components
import { Container, UncontrolledTooltip } from 'reactstrap'

const Footer = () => {
  return (
    <footer className='footer footer-white footer-big pb-1'>
      <Container>
        <hr />
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-12 col-md-5 mx-auto'>
            <div className='location'>
              <p className='mb-0'>Medellín - Antioquia - Colombia</p>
              <p className='mb-0'>Parque Manzanares - Cra. 52 #2C-3</p>
              <p className='mb-0'>Comuna 15 - Guayabal</p>
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
                  src={require('../../assets/img/whatsapp-logo.png').default}
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
                  src={require('assets/img/instagram-logo.png').default}
                />
              </a>
              <UncontrolledTooltip delay={0} target='tooltip11233535'>
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
                  src={require('../../assets/img/gmail-logo.png').default}
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
                frameBorder='0'
                style={{ border: 10 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='copyright text-center'>
          <span id='copyright' className='text-dark'>
            Copyright © {new Date().getFullYear()} Hecho con{' '}
            <i className='fas fa-heart text-danger' /> por{' '}
            <a
              href='https://github.com/sagudelo1200'
              target='_blank'
              rel='noreferrer'
            >
              Santiago Agudelo
            </a>
          </span>
          <UncontrolledTooltip target='copyright'>
            Todos los derechos reservados
          </UncontrolledTooltip>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
