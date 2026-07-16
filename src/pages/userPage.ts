import { CommonPage } from "./commonPage";
import { Page, expect } from '@playwright/test'



export class UsersPage extends CommonPage {

    constructor(page: Page) {
        super(page)
    }

    async verifyUsersPage() {
        await this.page.waitForURL('https://testcms.reco-claims.ca/application-users', { timeout: 60000 })
        await this.page.getByRole('heading', { name: 'Users' }).waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.getByRole('heading', { name: 'Users' })).toBeVisible()
    }

    async validateErrMessage() {
        await expect(this.page.getByRole('button', { name: 'add_circle_outline Add' })).toBeVisible()
        await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
        await this.page.getByText('Add Application User').waitFor({state: 'visible', timeout: 60000})
        await expect(this.page.getByText('Add Application User')).toBeVisible()
        await this.page.getByRole('button', { name: 'Save' }).click()
        await expect(this.page.getByText('Email is required')).toBeVisible()
        await expect(this.page.getByText('Name is required')).toBeVisible()
    }

    async createNewRole() {
        const randomNum = await this.randomNumber()
        await expect(this.page.getByRole('button', { name: 'add_circle_outline Add' })).toBeVisible()
        await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
        await this.page.getByText('Add Application User').waitFor({state: 'visible', timeout: 60000})
        await expect(this.page.getByText('Add Application User')).toBeVisible()
        await this.page.locator('input[name="Email"]').fill(`test${randomNum}@gmail.com`)
        await this.page.locator('input[name="UserFullName"]').fill(`Test${randomNum}`)
        await this.page.locator('[class="rz-dropdown valid rz-state-empty"]').click()
        await this.page.locator('[class="rz-dropdown-items rz-dropdown-list"]').last().waitFor({state: 'visible', timeout: 60000})
        await this.page.getByText('Test_29368913').click()
        await this.page.locator('[name="Password"]').fill('Test@12345')
        await this.page.locator('[name="ConfirmPassword"]').fill('Test@12345')
        await this.page.getByRole('button', { name: 'Save' }).click()
        await expect(this.page.getByText('User created successfully')).toBeVisible({timeout: 60000})
    }



}