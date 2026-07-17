import { test } from '../src/config/fixtures'
import { ClaimsPage } from '../src/pages/claimsPage'
import { claimsPageHeader } from '../src/constants/constants'

test.describe('Claims Page Tests', () => {

    let claimsPage: ClaimsPage

    test.beforeEach(async ({ pageWithLogin }) => {
        claimsPage = new ClaimsPage(pageWithLogin)
    })


    test('Verify claims page header', async()=> {
        await claimsPage.verifyHeader(claimsPageHeader)
    })

    test('Verify the user can able to filer the column values', async()=> {
        test.setTimeout(120000)
        await claimsPage.verifyFilteredValues()
    })



})