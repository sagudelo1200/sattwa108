import AuthContextProvider from 'contexts/authContext'
import NotifyContextProvider from 'contexts/notifyContext'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

// pages
import Index from 'views/Index.js'
import Grupo from 'views/Grupo'
import Familia from 'views/unidades/Familia'
import Manada from 'views/unidades/Manada'
import Scouts from 'views/unidades/Scouts'
import Sociedad from 'views/unidades/Sociedad'
import Clan from 'views/unidades/Clan'
import Adultos from 'views/unidades/Adultos'
import Aldea from 'views/unidades/Aldea'
import Login from 'views/Login'
import Visitanos from 'views/Visitanos'
import Cancilleria from 'views/Cancilleria'

import PrivateRoute from 'components/PrivateRoute'
import ScrollToTop from 'components/ScrollToTop '

function App() {
  return (
    <NotifyContextProvider>
      <AuthContextProvider>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path='/' render={(props) => <Index {...props} />} />
            <Route
              exact
              path='/visitanos'
              render={(props) => <Visitanos {...props} />}
            />
            <Route
              exact
              path='/grupo'
              render={(props) => <Grupo {...props} />}
            />
            <Route
              exact
              path='/familia'
              render={(props) => <Familia {...props} />}
            />
            <Route
              exact
              path='/manada'
              render={(props) => <Manada {...props} />}
            />
            <Route
              exact
              path='/aldea'
              render={(props) => <Aldea {...props} />}
            />
            <Route
              exact
              path='/scouts'
              render={(props) => <Scouts {...props} />}
            />
            <Route
              exact
              path='/sociedad'
              render={(props) => <Sociedad {...props} />}
            />
            <Route exact path='/clan' render={(props) => <Clan {...props} />} />
            <Route
              exact
              path='/adultos'
              render={(props) => <Adultos {...props} />}
            />
            <Route
              exact
              path='/cancilleria'
              render={(props) => <Cancilleria {...props} />}
            />
            <PrivateRoute exact path='/perfil' component={Index} />
            <PrivateRoute exact path='/ingresar' component={Login} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </AuthContextProvider>
    </NotifyContextProvider>
  )
}

export default App
