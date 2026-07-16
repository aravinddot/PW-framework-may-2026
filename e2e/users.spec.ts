import { test } from '../src/config/fixtures'
import { UsersPage } from '../src/pages/userPage'

test.describe('Users Page Tests', () => {

    let usersPage: UsersPage

    test.beforeEach(async ({ pageWithLogin }) => {
        usersPage = new UsersPage(pageWithLogin)
    })

    test('Verify Validation when required fields are empty', async () => {
        await usersPage.navigateViaHomePage('Administrator', 'Users')
        await usersPage.verifyUsersPage()
        await usersPage.validateErrMessage()
    })

    test('Verify user creation with valid details', async () => {
        await usersPage.navigateViaHomePage('Administrator', 'Users')
        await usersPage.verifyUsersPage()
        await usersPage.createNewRole()
    })

})