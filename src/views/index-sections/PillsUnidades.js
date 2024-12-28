import React, { useState } from 'react'

import TabPaneUnidades from './TabPaneUnidades'

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  UncontrolledTooltip,
} from 'reactstrap'

const PillsUnidades = () => {
  const pill = 'familia'
  const [active, setActive] = useState(pill)
  return (
    <section data-background-color='black' id='section1'>
      <Container>
        <div className='nav-align-center'>
          <h2 className='title'>Ramas o Unidades del Grupo</h2>
          <Nav
            className='nav-pills-info nav-pills-just-icons d-flex justify-content-around'
            pills
            role='tablist'
          >
            <NavItem>
              <NavLink
                className={(active === 'familia' ? 'active' : '') + ' m-2'}
                href='#sattwa108'
                onClick={(e) => {
                  e.preventDefault()
                  setActive('familia')
                }}
              >
                <img
                  alt='destacados familia'
                  className='rounded-circle'
                  src={
                    require('assets/img/flores/familia_sin_texto_sin_fondo.png')
                      .default
                  }
                  id='tooltipfamilia'
                />
                <UncontrolledTooltip
                  delay={0}
                  placement='bottom'
                  target='tooltipfamilia'
                >
                  Familia
                </UncontrolledTooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={(active === 'manada' ? 'active' : '') + ' m-2'}
                href='#sattwa108'
                onClick={(e) => {
                  e.preventDefault()
                  setActive('manada')
                }}
              >
                <img
                  alt='destacados manada'
                  className='rounded-circle'
                  src={
                    require('assets/img/flores/manada_sin_texto_sin_fondo.png')
                      .default
                  }
                  id='tooltipmanada'
                />
                <UncontrolledTooltip
                  delay={0}
                  placement='bottom'
                  target='tooltipmanada'
                >
                  Manada
                </UncontrolledTooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={(active === 'aldea' ? 'active' : '') + ' m-2'}
                href='#sattwa108'
                onClick={(e) => {
                  e.preventDefault()
                  setActive('aldea')
                }}
              >
                <img
                  alt='destacados aldea'
                  className='rounded-circle'
                  src={
                    require('assets/img/flores/aldea_sin_texto_sin_fondo.png')
                      .default
                  }
                  id='tooltipaldea'
                />
                <UncontrolledTooltip
                  delay={0}
                  placement='bottom'
                  target='tooltipaldea'
                >
                  Aldea
                </UncontrolledTooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={(active === 'scouts' ? 'active' : '') + ' m-2'}
                href='#sattwa108'
                onClick={(e) => {
                  e.preventDefault()
                  setActive('scouts')
                }}
              >
                <img
                  alt='destacados scouts'
                  className='rounded-circle'
                  src={
                    require('assets/img/flores/scouts_sin_texto_sin_fondo.png')
                      .default
                  }
                  id='tooltipscouts'
                />
                <UncontrolledTooltip
                  delay={0}
                  placement='bottom'
                  target='tooltipscouts'
                >
                  Scouts
                </UncontrolledTooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={(active === 'sociedad' ? 'active' : '') + ' m-2'}
                href='#sattwa108'
                onClick={(e) => {
                  e.preventDefault()
                  setActive('sociedad')
                }}
              >
                <img
                  alt='destacados sociedad'
                  className='rounded-circle'
                  src={
                    require('assets/img/flores/sociedad_sin_texto_sin_fondo.png')
                      .default
                  }
                  id='tooltipsociedad'
                />
                <UncontrolledTooltip
                  delay={0}
                  placement='bottom'
                  target='tooltipsociedad'
                >
                  Sociedad
                </UncontrolledTooltip>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={(active === 'clan' ? 'active' : '') + ' m-2'}
                href='#sattwa108'
                onClick={(e) => {
                  e.preventDefault()
                  setActive('clan')
                }}
              >
                <img
                  alt='destacados clan'
                  className='rounded-circle'
                  src={
                    require('assets/img/flores/clan_sin_texto_sin_fondo.png')
                      .default
                  }
                  id='tooltipclan'
                />
                <UncontrolledTooltip
                  delay={0}
                  placement='bottom'
                  target='tooltipclan'
                >
                  Clan
                </UncontrolledTooltip>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={'pills' + active}>
          <TabPaneUnidades unidad='familia' />
          <TabPaneUnidades unidad='manada' />
          <TabPaneUnidades unidad='aldea' />
          <TabPaneUnidades unidad='scouts' />
          <TabPaneUnidades unidad='sociedad' />
          <TabPaneUnidades unidad='clan' />
        </TabContent>
      </Container>
    </section>
  )
}

export default PillsUnidades
