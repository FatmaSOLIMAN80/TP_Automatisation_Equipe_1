describe('vérifier le loguin et logout', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com', {
            timeout: 50000
        });
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
    });


    it('loguin_test', () => {

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard");

    });
    it('logout_test', () => {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
        cy.get('.oxd-text--h5').contains("Login")
    });
});