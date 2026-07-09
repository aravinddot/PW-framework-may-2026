import { test, expect } from '@playwright/test'
import { LoginPage } from '../src/pages/loginPage'
import { CommonPage } from '../src/pages/commonPage'
import { RolesPage } from '../src/pages/rolesPage'




test.describe('Roles page Tests', () => {

    let loginPage: LoginPage
    let rolesPage: RolesPage
    let commonPage: CommonPage

    test.beforeEach(async({page})=> {
        loginPage = new LoginPage(page)
        rolesPage = new RolesPage(page)
        commonPage = new CommonPage(page)
    })


    test('TC-001 Verify user can open Add Application Role Popup', async () => {

        await loginPage.userLogin()
        await commonPage.navigateViaHomePage('Administrator', 'Roles')
        await rolesPage.verifyRolesPage()
        await rolesPage.verifyAddApplicationPopup()

    })







})