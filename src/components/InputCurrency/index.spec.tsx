import { render, screen } from '@testing-library/react'

import InputCurrency from '.'

describe('<InputCurrency />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputCurrency />)

    expect(
      screen.getByRole('heading', { name: /InputCurrency/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
