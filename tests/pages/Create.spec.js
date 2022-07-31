
const {test, expect, request} = require('@playwright/experimental-ct-react')
const {default: Create}  = require('../../src/pages/Create/Create')

test.describe('should be render text in Create page', () => {
	test('render text in title text', async({page, mount}) => {
		const component= await mount(Create) 
		//go to page
		await page.goto('https://thedojo-6c8c2.web.app')
		// create user 
		const user = await request.newContext()
		// login
		await user.post('https://thedojo-6c8c2.web.app', {
			form: {
				'email': 'thiraboaty@gmail.com',
				'password': 'test123'
			}
		})
		//go to create page
		await page.goto('https://thedojo-6c8c2.web.app/create')
		const title = await page.innerText('.page-title')
		expect(title).toBe('New Project')
		expect(component).toHaveText('New Project')
	})
})