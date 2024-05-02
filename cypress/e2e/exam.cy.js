describe('This is a test assesment', () => {

    it('This should work flawlessly', () => {

        cy.visit("https://editorielle-fe-uat.vercel.app/");
        cy.title().should('eq', 'Editorielle');

        cy.get("button[data-cy='button-media-form']").click();

        cy.get('[data-cy= "mf-first-name"]').type("Tajamul", {force:true});
        cy.get('#lastName').type('Islam', {force: true});
        cy.get('#email').type('tajamulislam.100@gmail.com', {force: true});
        cy.get('#publicationName').type('Founder and Lightning', {force: true});
        cy.get('#publicationWebsite').type('https://www.abc.com', {force: true});
        cy.contains('Next').click({force: true});

        cy.get('#react-select-4-placeholder').click();
        cy.contains("Consumer media (print)").click({force: true});



    })
})