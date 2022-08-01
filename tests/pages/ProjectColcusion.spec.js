const {test, expect} = require('@playwright/test')

const {default: ProjectConcusion} = require('../../src/pages/ProjectColcusion/ProjectConcusion')

test.describe('should be render ProjectConclusion', async({mount}) => {
	await mount(ProjectConcusion)
	test('should be check title text', async({page}) => {
		const titleh4 = await page.locator('.h4')
		const dueDate = await page.locator('.due-date')
		expect(titleh4).toBe('Project Assigned By')
		expect(dueDate).toBe('Project Date: ')

	})

})