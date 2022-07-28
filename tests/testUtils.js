import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

//create Provider to wrap component
const Providers = ({children}) => {
	return children;
}

//create custom to render app
const customRender = (ui, options = {}) => render(ui, {wrapper: Providers, ...options})
// export everything
export * from '@testing-library/react'
// render method
export {customRender as render}