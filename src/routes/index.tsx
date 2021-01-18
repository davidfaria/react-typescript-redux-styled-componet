import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Route from './Route'

import SingIn from 'pages/auth/SingIn'
import Dashboard from 'pages/Dashboard'
import Customers from 'pages/Customers'
import Counter from 'pages/Counter'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect path="/" to="/singin" exact />
        <Route path="/singin" component={SingIn} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/customers" component={Customers} isPrivate />
        <Route path="/counter" component={Counter} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
