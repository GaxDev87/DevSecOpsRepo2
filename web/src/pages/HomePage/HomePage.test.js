import { render } from '@redwoodjs/testing/web'
import 'text-encoding-utf-8';
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
