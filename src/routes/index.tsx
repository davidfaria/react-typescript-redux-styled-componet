import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Route from './Route''
import SingIn from 'pages/auth/SingIn'
import Dashboard from 'pages/dashboard/Dashboard'
import CustomerList from 'pages/customers/CustomerList'
import Counter from 'pages/counter/Counter'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SingIn} exact />
        <Route path="/singin" component={SingIn} isPrivate />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/customers" component={CustomerList} isPrivate />
        <Route path="/counter" component={Counter} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
