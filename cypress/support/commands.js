// ***********************************************
// Custom Commands for Door Gap Form Testing
// ***********************************************

/**
 * Fills out the door gap recall form with provided data
 * @param {Object} formData - Form data from fixture
 * @param {Object} files - File paths for uploads
 */
Cypress.Commands.add('fillDoorGapForm', (formData, files = {}) => {
  const pdfFile = files.pdf || 'cypress/fixtures/files/sample.pdf';
  const imageFile = files.image || 'cypress/fixtures/files/sample.png';

  // Personal Information
  cy.get('#wpforms-327-field_0').type(formData.firstName);
  cy.get('#wpforms-327-field_0-last').type(formData.lastName);
  cy.get('#wpforms-327-field_11').type(formData.phone);
  cy.get('#wpforms-327-field_1').type(formData.email);
  cy.get('#wpforms-327-field_9').select(formData.company);

  // Address & Serial Info
  cy.get('#wpforms-327-field_8').type(formData.serialNumber);
  cy.get('#wpforms-327-field_13').type(formData.houseNumber);
  cy.get('#wpforms-327-field_14').type(formData.city);
  cy.get('#wpforms-327-field_16').type(formData.province);
  cy.get('#wpforms-327-field_15').type(formData.postalCode);

  // File Uploads - PDF
  cy.get('#wpforms-327-field_27').selectFile(pdfFile);

  // File Uploads - Images (all 8 image fields)
  const imageFields = [
    '#wpforms-327-field_10',
    '#wpforms-327-field_30',
    '#wpforms-327-field_22',
    '#wpforms-327-field_31',
    '#wpforms-327-field_23',
    '#wpforms-327-field_32',
    '#wpforms-327-field_24',
    '#wpforms-327-field_33'
  ];
  
  imageFields.forEach(selector => {
    cy.get(selector).selectFile(imageFile);
  });

  // Notes/Comments
  cy.get('#wpforms-327-field_2').type(formData.notes);
});

/**
 * Submits the door gap form and verifies success
 */
Cypress.Commands.add('submitDoorGapForm', () => {
  cy.get('#wpforms-form-327').submit();
});
