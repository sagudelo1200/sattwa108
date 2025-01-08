import { TabPane } from 'reactstrap'

import { Link } from 'react-router-dom'

const TabPaneUnidades = ({ unidad }) => {
  const tabId = `pills${unidad}`
  let desc, title

  switch (unidad) {
    case 'familia':
      title = 'Familia'
      desc =
        'Un Cachorro es un niño o niña entre 5 y 7 años que se une al Movimiento Scout. Esta unidad fomenta su desarrollo personal a través del aprendizaje activo, como aprender jugando, dentro del marco simbólico de la fantasía en la familia. Raksha los guía y protege mientras exploran la selva del Seeonee.'
      break
    case 'manada':
      title = 'Manada'
      desc =
        'Un Lobato es un niño o niña de 7 a 10 años, proveniente de la Familia de Cachorros o externo al Movimiento Scout. Sus actividades se desarrollan en la fantasía de la Manada, donde Akela los guía y acompaña en su recorrido por la selva del Seeonee.'
      break
    case 'aldea':
      title = 'Aldea'
      desc =
        'Un Webelo es un niño o niña que puede venir de la Manada de Lobatos o de fuera del Movimiento Scout entre los 10 y los 12 años. Desarrolla sus actividades teniendo como marco simbólico la exploración en el bosque.'
      break
    case 'scouts':
      title = 'Scouts'
      desc =
        'Un Scout es un joven de 12 a 15 años que, con espíritu aventurero y soñador, aprende de la naturaleza y vive desafíos emocionantes y seguros que lo llevan a encontrar lo útil de ella dentro del marco simbólico de la Tropa.'
      break
    case 'sociedad':
      title = 'Sociedad'
      desc =
        'Un Pionero es un joven de 15 a 18 años, proveniente de la Tropa Scout o externo al Movimiento Scout. Aventurero y soñador, aprende de la naturaleza al desafiarse y descubrir su utilidad, disfrutando experiencias seguras dentro del marco simbólico de la aventura real o cooperativa en la Sociedad.'
      break
    case 'clan':
      title = 'Clan'
      desc =
        'Un Rover es un joven adulto de 18 a 22 años, proveniente de la Sociedad de Pioneros o externo al Movimiento Scout. Trabajan en el Clan, una unidad donde, unidos por lazos de afecto, actúan para transformar positivamente sus entornos y ser protagonistas en sus comunidades. La propuesta Rover está abierta a quienes deseen vivir los valores de la Promesa y la Ley, con la libertad como marco simbólico.'
      break
    default:
      break
  }

  return (
    <TabPane tabId={tabId} className='px-md-5 mx-md-5'>
      <h3 className='title text-center'>
        <Link to={`/${unidad}`} className='text-info'>
          {title}
        </Link>
      </h3>
      <p>
        {desc}
        <br />
        <br />
        <Link to={`/${unidad}`} className='text-info'>
          Ver más
        </Link>
      </p>
      <br />
    </TabPane>
  )
}

export default TabPaneUnidades
