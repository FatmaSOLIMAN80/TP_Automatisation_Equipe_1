describe('vérifier le loguin et logout', () => {
    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
        /*/cy.visit('https://opensource-demo.orangehrmlive.com', {
            timeout: 50000
        });*/
        cy.visit('https://opensource-demo.orangehrmlive.com', {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', {
                    value: Cypress.env('LANGUAGE'),
                });
            },
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

    /* it('ajout d\'un Admin ', () => {
         cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
         cy.get('.orangehrm-header-container > .oxd-button').click()
         cy.get('.oxd-select-text-input').first().click().then(() => {
             cy.get('div[role="option"] > span')
                 .contains('Admin')
                 .click();
         })
 
     });*/
    it('ajout d\'un Admin', () => {
        cy.contains('.oxd-main-menu-item > .oxd-text', 'Admin').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.oxd-select-text-input').first().click();
        cy.contains('div[role="option"] > span', 'Admin').click();
    });


})