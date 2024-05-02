describe('Here we are not going to hardcode any data', () => {

    it('This is my first try', () =>{

cy.visit("https://www.founderandlightning.com/contact");  //browses to the web page

cy.url().should('include', 'founderandlightning')
.and('eq', 'https://www.founderandlightning.com/contact')
.and('not.contain', 'tajamul')

cy.get('#hs-eu-confirmation-button').click();  //accepts the cookies
cy.fixture('f&l').then((data) => {    //getting data from the fxiture
cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type(data.firstName);
cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type(data.lastName);
cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type(data.email);
cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95').type(data.phone);
cy.get('#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95').select('LinkedIn');
cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95').type(data.message);
})

const iframe = cy.get('[title="reCAPTCHA"]')
.should('be.visible')
.then(cy.wrap);

iframe.click();
cy.wait(5000);

cy.get('input[type="submit"]').click();



    })


    
})