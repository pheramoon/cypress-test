/// <reference types="cypress" />

describe('US Form Test', () => {
    it('Can submit a valid form', () => {
        cy.visit('https://home-elevator-door-gap.com/submit/');
        cy.get('#wpforms-327-field_0').type('Mehdi');
        cy.get('#wpforms-327-field_0-last').type('Mazhari');
        cy.get('#wpforms-327-field_11').type('2222222222');
        cy.get('#wpforms-327-field_1').type('mmazhari@savaria.com');
        cy.get('#wpforms-327-field_9').select('Savaria');
        cy.get('#wpforms-327-field_8').type('12345');
        cy.get('#wpforms-327-field_13').type('3025');
        cy.get('#wpforms-327-field_14').type('Mississauga');
        cy.get('#wpforms-327-field_16').type('Ontario');
        cy.get('#wpforms-327-field_15').type('12345');
        cy.get('#wpforms-327-field_27').selectFile('cypress/downloads/file_example_PDF_mehdi_test.pdf');
        cy.get('#wpforms-327-field_10').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_30').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_22').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_31').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_23').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_32').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_24').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_33').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_2').type('This is an automated form test');
        cy.get('#wpforms-form-327').submit();
    })
})

describe('CA Form Test', () => {
    it('Can submit a valid form', () => {
        cy.visit('https://canada-door-gap-recall.com/submit/');
        cy.get('#wpforms-327-field_0').type('Mehdi');
        cy.get('#wpforms-327-field_0-last').type('Mazhari');
        cy.get('#wpforms-327-field_11').type('2222222222');
        cy.get('#wpforms-327-field_1').type('mmazhari@savaria.com');
        cy.get('#wpforms-327-field_9').select('Savaria');
        cy.get('#wpforms-327-field_8').type('12345');
        cy.get('#wpforms-327-field_13').type('3025');
        cy.get('#wpforms-327-field_14').type('Mississauga');
        cy.get('#wpforms-327-field_16').type('Ontario');
        cy.get('#wpforms-327-field_15').type('12345');
        cy.get('#wpforms-327-field_27').selectFile('cypress/downloads/file_example_PDF_mehdi_test.pdf');
        cy.get('#wpforms-327-field_10').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_30').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_22').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_31').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_23').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_32').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_24').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_33').selectFile('cypress/downloads/Sample-PNG-HD-Image.png');
        cy.get('#wpforms-327-field_2').type('This is an automated form test');
        cy.get('#wpforms-form-327').submit();
    })
})