import React, { useState, useEffect } from 'react'
import fetchData from './functions/fetchData'
// reactstrap components
import { Container } from 'reactstrap'

// core components
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar.js'
import Header from './components/Header.js'
import Footer from 'components/Footers/Footer.js'

function Scouts() {
  document.title = 'Scouts - Sattwa 108'
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const [data, setData] = useState({})
  const unidad = 'scouts'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
    console.log(data)
    setData(response.data)
    setIntegrantesN(response.integrantes)
    setLoading(false)
  }

  useEffect(() => {
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0

    fetchAllData()

    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='wrapper'>
        <Header unidad={unidad} nIntegrantes={nIntegrantes} />
        <section>
          <Container>
            <div className='row justify-content-center'>
              <div className='col-sm-6'></div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Scouts
