import { expect, Page } from '@playwright/test'

export class RolesPage {



    page: Page

    constructor(page: Page) {
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
}










