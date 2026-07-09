import {expect, Locator, Page} from '@playwright/test'
import testData from '../testData/JsonFiles/testdata.json'

const {username, password, baseUrl} = testData


export class LoginPage {

    page: Page
    userName: Locator
    password: Locator
    submit: Locator
    profileIcon: Locator

    constructor(page: Page) {
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submit = page.locator('[type="submit"]')
        this.profileIcon = page.locator('[class="rz-menu rz-profile-menu"]')
    }


    async userLogin() {
        await this.page.goto(baseUrl)
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.submit.click()
        await this.page.waitForURL(baseUrl, { timeout: 60000 })
        await this.profileIcon.waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.profileIcon).toBeVisible()
    }







}