import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

function IndexHeader() {
  // navbar collapses states and functions
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <>
      {navbarOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setNavbarOpen(false)
          }}
        />
      ) : null}
      <div className='header'>
        <div className='page-header clear-filter' filter-color='black'>
          <div
            className='page-header-image'
            style={{
              backgroundImage:
                'url(' + require('assets/img/header.jpg').default + ')',
            }}
          />
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <img
                  alt='...'
                  className='header-logo'
                  src={
                    require('assets/img/flores/grupo_sin_texto_sin_fondo.png')
                      .default
                  }
                  style={{ width: '261px', maxWidth: '261px' }}
                ></img>
                <h1 className='title'>Grupo Scout Sattwa 108</h1>
                <h4 className='description text-white'>
                  Cultivando un mejor mañana
                </h4>
              </Col>
            </Row>
            <div className='text-center'>
              <button
                className='btn btn-link btn-move-down mt-3 text-white pt-5'
                onClick={() => {
                  const section = document.querySelector('#bannerUnidades')
                  section.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <i className='fa-solid fa-angle-down fa-bounce fa-3x'></i>
              </button>
              <div id='bannerUnidades'></div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default IndexHeader
