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
        <div className='page-header clear-filter' filter-color='green'>
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
                ></img>
                <h1 className='title'>Grupo Scout Sattwa 108</h1>
                <h4 className='description text-white'>
                  Cultivando un mejor mañana
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default IndexHeader
