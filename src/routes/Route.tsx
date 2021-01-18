import React from 'react'
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect
} from 'react-router-dom'

import PrivateLayout from 'pages/Layout/PrivateLayout'
import PublicLayout from 'pages/Layout/PublicLayout'
import { useSelector } from 'react-redux'
import { getIsLogged } from 'store/UserSlice'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const islogged = useSelector(getIsLogged) as boolean

  console.log('islogged', islogged)
  const Layout = islogged ? PrivateLayout : PublicLayout

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === islogged ? (
          <Layout>
            <Component />
          </Layout>
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
