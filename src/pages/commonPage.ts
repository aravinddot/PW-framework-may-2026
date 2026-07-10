import { Page } from '@playwright/test'


export class CommonPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }


    async navigateViaHomePage(parentMenu: string, childMenu?: string) {
        await this.page.getByText(parentMenu, { exact: true }).waitFor({ state: 'visible', timeout: 60000 })
        await this.page.getByText(parentMenu, { exact: true }).click()
        if (childMenu) {
            await this.page.getByRole('link', { name: childMenu }).waitFor({ state: 'visible', timeout: 60000 })
            await this.page.getByRole('link', { name: childMenu }).click()
        }

    }


    async randomNumber() {
        const num = Math.floor(Math.random() * 10000)
        return num
    }




}