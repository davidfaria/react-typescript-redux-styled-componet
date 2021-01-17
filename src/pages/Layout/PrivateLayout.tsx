import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

type PrivateLayoutProps = {
  children: React.ReactNode
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return <BrowserRouter>{{ children }}</BrowserRouter>
}

export default PrivateLayout
