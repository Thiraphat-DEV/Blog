import {render, screen} from '@testing-library/react'
import AuthContext from './AuthContext'

test('should be render context parent', () => {
    const context = render(<AuthContext />)
    expect(context).toBeInTheDocument()
})
