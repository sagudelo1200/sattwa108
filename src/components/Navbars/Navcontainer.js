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
  const pathName = window.location.pathname.replace('/', '')
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
            >
              <i className='fas fa-users mr-1'></i>
              <p>Unidades</p>
            </DropdownToggle>
            <DropdownMenu aria-labelledby='navDropUnidades' right>
              <DropdownItem
                active={pathName === 'familia' ? true : false}
                to='/familia'
                tag={Link}
              >
                Familia Múládhára
              </DropdownItem>
              <DropdownItem
                active={pathName === 'manada' ? true : false}
                to='/manada'
                tag={Link}
              >
                Manada Swádhisthána
              </DropdownItem>
              <DropdownItem
                active={pathName === 'aldea' ? true : false}
                to='/aldea'
                tag={Link}
              >
                Aldea Manipura
              </DropdownItem>
              <DropdownItem
                active={pathName === 'scouts' ? true : false}
                to='/scouts'
                tag={Link}
              >
                Tropa Anahata
              </DropdownItem>
              <DropdownItem
                active={pathName === 'sociedad' ? true : false}
                to='/sociedad'
                tag={Link}
              >
                Sociedad Vishuddha
              </DropdownItem>
              <DropdownItem
                active={pathName === 'clan' ? true : false}
                to='/clan'
                tag={Link}
              >
                Clan Ajña
              </DropdownItem>
              <DropdownItem
                active={pathName === 'adultos' ? true : false}
                to='/adultos'
                tag={Link}
              >
                Adultos Voluntarios
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className={pathName === 'grupo' ? 'active' : ''}>
            <NavLink to='/grupo' tag={Link}>
              ⚜️ Grupo
            </NavLink>
          </NavItem>
          {!isAuthenticated() && (
            <NavItem className={pathName === 'ingresar' ? 'd-none' : ''}>
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
            <img
              alt='RAS'
              id='logo_ras_asc_omms'
              className='mb-1'
              src={require('assets/img/logos/ras_asc_omms_color.png').default}
              height={50}
            />
            <UncontrolledTooltip target='logo_ras_asc_omms'>
              Región Antioquia Scout, Scouts de Colombia, Organización Mundial
              del Movimiento Scout
            </UncontrolledTooltip>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  )
}

export default Navcontainer
