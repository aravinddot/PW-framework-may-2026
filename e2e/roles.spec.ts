import { RolesPage } from '../src/pages/rolesPage'
import { test } from '../src/config/fixtures'

test.describe('Roles page Tests', () => {

    let rolesPage: RolesPage

    test.beforeEach(async ({ pageWithLogin }) => {
        pageWithLogin.setDefaultTimeout(180000)
        rolesPage = new RolesPage(pageWithLogin)
    })

    test('TC-001 Verify user can open Add Application Role Popup', async () => {
        await rolesPage.navigateViaHomePage('Administrator', 'Roles')
        await rolesPage.verifyRolesPage()
        await rolesPage.verifyAddApplicationPopup()
    })

    test('TC-002 Verify the user can create a new role', async () => {
        await rolesPage.navigateViaHomePage('Administrator', 'Roles')
        await rolesPage.verifyRolesPage()
        await rolesPage.verifyAddApplicationPopup()
        await rolesPage.createNewRole()
    })







})