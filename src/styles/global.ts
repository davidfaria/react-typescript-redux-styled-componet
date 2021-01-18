import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

html {
  min-height: 100vh;
  /* a cada 1rem será considerado 10px */
  font-size: 62.5%;
}

body,
input,
button {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  /* font-family: 'Open Sans', sans-serif; */
  font-size: 1.6rem;
  transition: color 0.2s ease-out;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: #fff;
  overflow: hidden;
  overflow-y: scroll;
  overflow-y: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 600;
}

a {
  text-decoration: none;
}
`
