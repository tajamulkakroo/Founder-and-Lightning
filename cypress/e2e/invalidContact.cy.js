describe('Testing the contact us page of Founder and Lightning with invalida data', () => {
  it('Test with invalid data for email', () => {
    cy.visit("https://www.founderandlightning.com/contact");

    cy.url()
      .should('include', 'founderandlightning')
      .and('eq', 'https://www.founderandlightning.com/contact')
      .and('not.contain', 'tajamul');

    cy.get('#hs-eu-confirmation-button').click();
    cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type('Tajamul');
    cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type('Islam');
    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type('tajamulislam.100@gmail.');
    cy.get('.hs-error-msg').should('be.visible')
    .and('contain', 'Email must be formatted correctly');
    
   });

   it('Test with invalid data for phone', () => {
    cy.visit("https://www.founderandlightning.com/contact");

    cy.url()
      .should('include', 'founderandlightning')
      .and('eq', 'https://www.founderandlightning.com/contact')
      .and('not.contain', 'tajamul');

    cy.get('#hs-eu-confirmation-button').click();
    cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type('Tajamul');
    cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type('Islam');
    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type('tajamulislam.100@gmail.com');
    cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95').type(1234);
    cy.get('.hs-error-msg').should('be.visible')
    .and('contain', 'The number you entered is not in range.');



   })
});
