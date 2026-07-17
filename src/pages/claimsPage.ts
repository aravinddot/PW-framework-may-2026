import { CommonPage } from "./commonPage";
import { Page, expect } from '@playwright/test'



export class ClaimsPage extends CommonPage {

    constructor(page: Page) {
        super(page)
    }

    async verifyFilteredValues() {
        // await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})
        // await this.page.locator('tbody tr td:first-child').first().waitFor({state: 'visible', timeout: 60000})
        // const unFilteredValues = await this.page.locator('tbody tr td:first-child').allInnerTexts()
        // console.log(unFilteredValues)

        // await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})
        // await this.page.getByRole('textbox', { name: 'Search' }).fill('00001')
        // await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})
        // await this.page.getByRole('textbox', { name: 'Search' }).press('Enter')

        // await this.page.waitForTimeout(15000)
        // await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})
        // await this.page.getByRole('textbox', { name: 'Search' }).press('Enter')

        // await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})
        // await this.page.locator('tbody tr td:first-child').first().waitFor({state: 'visible', timeout: 60000})

        // await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})

        // const filteredValues = await this.page.locator('tbody tr td:first-child').allInnerTexts()
        // for(const value of filteredValues) {
        //     expect(value.toString()).toContain('00001')
        // }
        
        await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'visible', timeout: 60000})
        await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})

        await this.page.locator('tbody tr td:first-child').first().waitFor({state: 'visible', timeout: 60000})

        await this.page.getByRole('textbox', { name: 'Search' }).fill('00001')
        await this.page.getByRole('textbox', { name: 'Search' }).press('Enter')

        await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'visible', timeout: 60000})
        await this.page.locator('.rzi-circle-o-notch').waitFor({state: 'detached', timeout: 60000})

         await this.page.locator('tbody tr td:first-child').first().waitFor({state: 'visible', timeout: 60000})

        const filteredValues = await this.page.locator('tbody tr td:first-child').allInnerTexts()
        for(const value of filteredValues) {
            expect(value.toString()).toContain('00001')
        }
    }

}