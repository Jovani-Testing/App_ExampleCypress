export class RegisterPage {
    elements = {
      titleInput: () => cy.get('#title'),
      titleFeedback: () => cy.get('#titleFeedback'),
      imageUrlInput: () => cy.get('#imageUrl'),
      urlFeedback: () => cy.get('#urlFeedback'),
      submitBtn: () => cy.get('#btnSubmit'),
    }
  
    typeTitle(text) {
      if (!text) return
      this.elements.titleInput().type(text)
    }
  
    typeUrl(text) {
      if (!text) return
      this.elements.imageUrlInput().type(text)
    }
  
    submit() {
      this.elements.submitBtn().click()
    }
  }