import 'cypress-iframe'

describe('Testing the contact us page of Founder and Lightning' , ()=> {

it('Test with Valid data', ()=> {

cy.visit("https://www.founderandlightning.com/contact");

cy.url().should('include', 'founderandlightning')
.and('eq', 'https://www.founderandlightning.com/contact')
.and('not.contain', 'tajamul')

cy.get('#hs-eu-confirmation-button').click();
cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type('Tajamul');
cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type('Islam');
cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type('tajamulislam.100@gmail.com');
cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95').type(9149479287);
cy.get('#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95').select('LinkedIn');
cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95').type('This is an assignment so I am adding some data here using cypress automation');

const iframe = cy.get('[title="reCAPTCHA"]')
.should('be.visible')
.then(cy.wrap);

iframe.click();
cy.wait(5000);

cy.get('input[type="submit"]').click();

})



})