import { expect, Page } from '@playwright/test'
import { CommonPage } from './commonPage'

export class RolesPage extends CommonPage {

    page: Page

    constructor(page: Page) {
        super(page)
        this.page = page
    }


    async verifyRolesPage() {
        await this.page.waitForURL('https://testcms.reco-claims.ca/application-roles', { timeout: 60000 })
        await this.page.getByRole('heading', { name: 'Roles' }).waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.getByRole('heading', { name: 'Roles' })).toBeVisible()
    }



    async verifyAddApplicationPopup() {
        await this.page.getByRole('button', { name: 'add_circle_outline' }).waitFor({ state: 'visible', timeout: 60000 })
        await this.page.getByRole('button', { name: 'add_circle_outline' }).click()
        await this.page.getByText('Add Application Role').waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.getByText('Add Application Role')).toBeVisible()
        await expect(this.page.locator('[name="Name"]')).toBeVisible()
        await expect(this.page.getByRole('button', { name: 'Save' })).toBeVisible()
        await expect(this.page.getByRole('button', { name: 'Cancel' })).toBeVisible()
    }


    async createNewRole() {
        const randomNum = await this.randomNumber()
        await this.page.locator('[name="Name"]').fill(`test-${randomNum}`)
        await this.page.getByRole('button', { name: 'Save' }).click()
    }
}










