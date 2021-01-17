import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect
} from 'react-router-dom'

import PrivateLayout from 'pages/Layout/PrivateLayout'
import PublicLayout from 'pages/Layout/PublicLayout'

type RouteProps = {
  isPrivate?: boolean
  component: React.ComponentType
} & ReactDOMRouteProps

const Route = ({
  isPrivate = false,
  component: Component,
  ...props
}: RouteProps) => {
  const Layout = isPrivate === true ? PrivateLayout : PublicLayout

  return (
    <ReactDOMRoute
      {...props}
      render={({ location }) => {
        return isPrivate ? (
          <Layout>{/* <Component /> */}</Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}

export default Route
