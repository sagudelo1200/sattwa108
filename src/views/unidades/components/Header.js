import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

function Header({ unidad, nIntegrantes }) {
  let filterColor, name, type
  let pageHeader = React.createRef()

  switch (unidad) {
    case 'familia':
      name = 'Familia Múládhára'
      type = 'Unidad de cachorros'
      filterColor = 'blue'
      break
    case 'manada':
      name = 'Manada Swádhisthána'
      type = 'Unidad de Lobatos'
      filterColor = 'yellow'
      break
    case 'aldea':
      name = 'Aldea Manipura'
      type = 'Unidad de Webelos'
      filterColor = 'yellow'
      break
    case 'scouts':
      name = 'Tropa Anahata'
      type = 'Unidad de Scouts'
      filterColor = 'green'
      break
    case 'sociedad':
      name = 'Sociedad Vishuddha'
      type = 'Unidad de Pioneros'
      filterColor = 'dark-blue'
      break
    case 'clan':
      name = 'Clan Ajña'
      type = 'Unidad de Rovers'
      filterColor = 'red'
      break
    case 'adultos':
      name = 'Adultos Voluntarios'
      type = 'Dirigentes y Consejo de Grupo'
      filterColor = 'dark-blue'
      break
    default:
      filterColor = 'green'
      break
  }

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })
  return (
    <>
      <div
        className='page-header clear-filter page-header-small'
        filter-color={filterColor}
      >
        <div
          className='page-header-image'
          style={{
            backgroundImage:
              'url(' + require(`assets/img/${unidad}.jpg`).default + ')',
            /* 'url(' + require(`assets/img/${unidad}.jpg`).default + ')', */
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className='photo-container'>
            <img
              alt={`Flor de Lis ${name}`}
              src={
                require(`assets/img/flores/${
                  unidad === 'adultos' ? 'grupo' : unidad
                }_texto_fondo_entero.png`).default
              }
            ></img>
          </div>
          <h1 className='title'>{name}</h1>
          <p className='category'>{type}</p>
          <div className='content d-none'>
            <div className='social-description'>
              {nIntegrantes === true ? (
                /* loading spinner */
                <i className='fa-solid fa-spinner fa-spin fa-3x pb-1'></i>
              ) : (
                <h2>{nIntegrantes}</h2>
              )}
              <p>Integrantes</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header
