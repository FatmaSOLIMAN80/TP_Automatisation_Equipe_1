describe('Le visuel des pages Orange doit être consistant', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com', {
            timeout: 50000
        });
    })
    it('Visuel de la page d\'authentification', () => {

        cy.wait(2000); // Attendre une courte période pour permettre au contenu de se charger si nécessaire

        cy.percySnapshot();
    });
    /*  it('Visuel de la page home ', () => {
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
         cy.get('.oxd-button').click()
         cy.wait(2000);
         cy.percySnapshot();
 
     });
  */
    it('Visuel de la page home ', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
            .type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
            .type('admin123');
        cy.get('.oxd-button').click()
        cy.wait(2000);
        cy.percySnapshot();

    });


});
