class RegisterForm {
  elements = {
    titleinput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlinput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit'),
  }

  typeTitle(text) {
    if (!text) return
    this.elements.titleinput().type(text)
  }

  typeUrl(text) {
    if (!text) return
    this.elements.imageUrlinput().type(text)
  }

  submit() {
    this.elements.submitBtn().click()
  }
}

const registerForm = new RegisterForm()

describe('Image Registration', () => {
  describe('Scenario: Submitting an image with invalid inputs', () => {
    const input = {
      title: '',
      url: ''
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it('When I enter "${input.title}" in the title field', () => {
      registerForm.typeTitle('teste' + input.title)
    })

    it('When I enter "${input.url}" in the URL field', () => {
      registerForm.typeUrl('teste@hotmail' + input.url)
    })

    it('When I click the submit button', () => {
      //registerForm.submit()
    })

    it('Then I should see "Please type a title for the image" message above the title field')
    it('And I should see "Please type a valid URL" message above the imageUrl field')
    it('And I should see an exclamation icon in the title and URL fields')
  })
})