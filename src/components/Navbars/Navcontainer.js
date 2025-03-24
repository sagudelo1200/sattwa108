import {
  Container,
  NavbarBrand,
  UncontrolledTooltip,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useAuth } from 'contexts/authContext'

import LoginModal from 'components/Modals/LoginModal'

const Navcontainer = ({
  collapseOpen,
  setCollapseOpen,
  brandColor = 'text-dark',
}) => {
  const pathName = window.location.pathname.split('/').pop()
  const { isAuthenticated, logout, currentUser } = useAuth()
  return (
    <Container>
      <div className='navbar-translate'>
        <NavbarBrand to='/' tag={Link} id='navbar-brand' className={brandColor}>
          <img
            alt='...'
            className='rounded-circle mr-1'
            src={require('assets/img/logo.png').default}
            width={40}
          />
          Grupo Scout Sattwa 108
        </NavbarBrand>
        <UncontrolledTooltip target='navbar-brand'>
          Cultivando un mejor mañana.
        </UncontrolledTooltip>
        <button
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setCollapseOpen(!collapseOpen)
          }}
          aria-expanded={collapseOpen}
          className='navbar-toggler'
        >
          <span className='navbar-toggler-bar top-bar'></span>
          <span className='navbar-toggler-bar middle-bar'></span>
          <span className='navbar-toggler-bar bottom-bar'></span>
        </button>
      </div>
      <Collapse isOpen={collapseOpen} navbar>
        <Nav className='d-flex align-items-center ml-auto' id='ceva' navbar>
          <NavItem
            className={`d-block d-lg-none ${pathName === '' ? 'active' : ''}`}
          >
            <NavLink to='/' tag={Link}>
              Inicio
            </NavLink>
          </NavItem>
          <NavItem className={pathName === 'grupo' ? 'active' : ''}>
            <NavLink to='/grupo' tag={Link}>
              Grupo Scout
            </NavLink>
          </NavItem>
          <UncontrolledDropdown
            active={
              pathName === 'familia' ||
              pathName === 'manada' ||
              pathName === 'aldea' ||
              pathName === 'scouts' ||
              pathName === 'sociedad' ||
              pathName === 'clan' ||
              pathName === 'adultos'
            }
            nav
          >
            <DropdownToggle
              caret
              color='default'
              data-toggle='dropdown'
              href='#Sattwa108'
              id='navDropUnidades'
              nav
              onClick={(e) => e.preventDefault()}
              className='text-center'
            >
              <i className='fas fa-users mr-1'></i>
              <p>Unidades</p>
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby='navDropUnidades'
              right
              style={{ minWidth: '11rem' }}
            >
              <DropdownItem
                active={pathName === 'familia' ? true : false}
                to='/familia'
                tag={Link}
                className='pl-2 d-none'
              >
                <img
                  alt='Familia'
                  className='rounded-circle mr-1'
                  src={
                    require('assets/img/flores/familia_sin_texto_sin_fondo.png')
                      .default
                  }
                  width={32}
                />
                Familia Múládhára
              </DropdownItem>
              <DropdownItem
                active={pathName === 'manada' ? true : false}
                to='/manada'
                tag={Link}
                className='pl-2'
              >
                <img
                  alt='Manada'
                  className='rounded-circle mr-1'
                  src={
                    require('assets/img/flores/manada_sin_texto_sin_fondo.png')
                      .default
                  }
                  width={32}
                />
                Manada Swádhisthána
              </DropdownItem>
              <DropdownItem
                active={pathName === 'aldea' ? true : false}
                to='/aldea'
                tag={Link}
                className='pl-2 d-none'
              >
                <img
                  alt='Aldea'
                  className='rounded-circle mr-1'
                  src={
                    require('assets/img/flores/aldea_sin_texto_sin_fondo.png')
                      .default
                  }
                  width={32}
                />
                Aldea Manipura
              </DropdownItem>
              <DropdownItem
                active={pathName === 'scouts' ? true : false}
                to='/scouts'
                tag={Link}
                className='pl-2'
              >
                <img
                  alt='Scouts'
                  className='rounded-circle mr-1'
                  src={
                    require('assets/img/flores/scouts_sin_texto_sin_fondo.png')
                      .default
                  }
                  width={32}
                />
                Tropa Anahata
              </DropdownItem>
              <DropdownItem
                active={pathName === 'sociedad' ? true : false}
                to='/sociedad'
                tag={Link}
                className='pl-2'
              >
                <img
                  alt='Sociedad'
                  className='rounded-circle mr-1'
                  src={
                    require('assets/img/flores/sociedad_sin_texto_sin_fondo.png')
                      .default
                  }
                  width={32}
                />
                Sociedad Vishuddha
              </DropdownItem>
              <DropdownItem
                active={pathName === 'clan' ? true : false}
                to='/clan'
                tag={Link}
                className='pl-2'
              >
                <img
                  alt='Clan'
                  className='rounded-circle mr-1'
                  src={
                    require('assets/img/flores/clan_sin_texto_sin_fondo.png')
                      .default
                  }
                  width={32}
                />
                Clan Ajña
              </DropdownItem>
              <DropdownItem
                active={pathName === 'adultos' ? true : false}
                to='/adultos'
                tag={Link}
                className='pl-2'
              >
                <img
                  alt='Adultos'
                  className='rounded-circle mr-1'
                  src={
                    require('assets/img/flores/grupo_sin_texto_sin_fondo.png')
                      .default
                  }
                  width={32}
                />
                Adultos Voluntarios
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className={pathName === 'visitanos' ? 'active' : ''}>
            <NavLink to='/visitanos' tag={Link}>
              Visítanos
            </NavLink>
          </NavItem>

          {!isAuthenticated() && (
            <NavItem
              className={pathName === 'sattwa1087ingresar' ? 'd-none' : ''}
            >
              <LoginModal />
            </NavItem>
          )}
          {isAuthenticated() && (
            <UncontrolledDropdown
              active={pathName === 'perfil' ? true : false}
              nav
            >
              <DropdownToggle
                caret
                color='default'
                data-toggle='dropdown'
                href='/perfil'
                id='navDropUsuario'
                nav
                onClick={(e) => e.preventDefault()}
                className='text-center'
              >
                <i className='fas fa-user mr-1'></i>
                <p>{currentUser.displayName}</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby='navDropUsuario' right>
                <DropdownItem
                  active={pathName === 'perfil' ? true : false}
                  to='/perfil'
                  tag={Link}
                >
                  <i className='fas fa-user-gear mr-1'></i>
                  Perfil
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                  <i className='fas fa-sign-out-alt mr-1'></i>
                  Cerrar Sesión
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
          <NavItem>
            <NavLink
              href='https://www.scout.org/'
              target='_blank'
              id='logo_omms'
              className='p-1'
            >
              <img
                alt='OMMS'
                className='mb-1'
                src={
                  require('assets/img/logos/omms_circulo_sin_fondo.png').default
                }
                height={33}
              />
            </NavLink>
            <UncontrolledTooltip target='logo_omms'>
              Organización Mundial del Movimiento Scout
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://scout.org.co/'
              target='_blank'
              id='logo_asc'
              className='p-1'
            >
              <img
                alt='ASC'
                className='mb-1'
                src={
                  require('assets/img/logos/asc_color_sin_fondo.png').default
                }
                height={33}
              />
            </NavLink>
            <UncontrolledTooltip target='logo_asc'>
              Asociación Scouts de Colombia
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://antioquiascout.org/'
              target='_blank'
              id='logo_ras'
              className='p-1'
            >
              <img
                alt='RAS'
                className='mb-1'
                src={
                  require('assets/img/logos/ras_color_sin_fondo.png').default
                }
                height={33}
              />
            </NavLink>
            <UncontrolledTooltip target='logo_ras'>
              Región Antioquia Scout
            </UncontrolledTooltip>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  )
}

export default Navcontainer
