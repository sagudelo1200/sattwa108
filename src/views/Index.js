import React from 'react'

// reactstrap components

// core components
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar.js'

// sections for this page
import IndexHeader from 'components/Headers/IndexHeader.js'
import PillsUnidades from './index-sections/PillsUnidades'
import RespaldoOMMS from './index-sections/RespaldoOMMS'
import Eventos from './index-sections/Eventos'
import Metodo from './index-sections/Metodo'
import Footer from 'components/Footers/Footer.js'

function Index() {
  React.useEffect(() => {
    document.title = 'Sattwa 108'
    document.body.classList.add('sections-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#/') + 2
    )
    var hrefId = href.substring(href.lastIndexOf('#') + 1)
    if (href.lastIndexOf('#') > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
    return function cleanup() {
      document.body.classList.remove('sections-page')
      document.body.classList.remove('sidebar-collapse')
    }
  })
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='wrapper'>
        <IndexHeader />
        <PillsUnidades />
        <RespaldoOMMS />
        <Metodo />
        <Eventos />
      </div>
      <Footer />
    </>
  )
}

export default Index