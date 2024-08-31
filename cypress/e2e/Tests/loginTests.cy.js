import { RegisterPage } from '../Pages/loginPage.cy'

describe('Image Registration', () => {
  const registerPage = new RegisterPage()

  describe('Scenario: Submitting an image with invalid inputs', () => {
    const input = {
      title: '',
      url: ''
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it('When I enter "${input.title}" in the title field', () => {
      registerPage.typeTitle('teste' + input.title)
    })

    it('When I enter "${input.url}" in the URL field', () => {
      registerPage.typeUrl('teste@hotmail' + input.url)
    })

    it('When I click the submit button', () => {
      //registerPage.submit()
    })

    it('Then I should see "Please type a title for the image" message above the title field')
    it('And I should see "Please type a valid URL" message above the imageUrl field')
    it('And I should see an exclamation icon in the title and URL fields')
  })
})