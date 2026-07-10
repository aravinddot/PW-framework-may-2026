import {expect, Locator, Page} from '@playwright/test'
import testData from '../testData/JsonFiles/testdata.json'

// const {username, password, baseUrl} = testData


export class LoginPage {

    page: Page
    userName: Locator
    password: Locator
    submit: Locator
    profileIcon: Locator
    baseUrl: string
    userNameValue: string
    passWordValue: string

    constructor(page: Page) {
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submit = page.locator('[type="submit"]')
        this.profileIcon = page.locator('[class="rz-menu rz-profile-menu"]')
        this.baseUrl = process.env.BASE_URL || ""
        this.userNameValue = process.env.USER_NAME || ""
        this.passWordValue = process.env.PASS_WORD || ""
    }


    async userLogin() {
        await this.page.goto(this.baseUrl)
        await this.userName.fill(this.userNameValue)
        await this.password.fill(this.passWordValue)
        await this.submit.click()
        await this.page.waitForURL(this.baseUrl, { timeout: 60000 })
        await this.profileIcon.waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.profileIcon).toBeVisible()
    }







}