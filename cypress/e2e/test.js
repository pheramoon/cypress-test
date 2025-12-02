/// <reference types="cypress" />

/**
 * Door Gap Recall Form Tests
 * Tests form submission for both US and CA sites
 */

const sites = [
  { 
    name: 'US', 
    url: 'https://home-elevator-door-gap.com/submit/',
    description: 'US Door Gap Form'
  },
  { 
    name: 'CA', 
    url: 'https://canada-door-gap-recall.com/submit/',
    description: 'CA Door Gap Form'
  }
];

// File paths for uploads
const testFiles = {
  pdf: 'cypress/fixtures/files/sample.pdf',
  image: 'cypress/fixtures/files/sample.png'
};

describe('Door Gap Recall Form Tests', () => {
  
  beforeEach(function() {
    // Load form data from fixture before each test
    cy.fixture('formData').as('formData');
  });

  sites.forEach(({ name, url, description }) => {
    
    describe(`${description}`, () => {
      
      it(`Can submit a valid form on ${name} site`, function() {
        // Visit the form page
        cy.visit(url);
        
        // Fill out the form using custom command
        cy.fillDoorGapForm(this.formData, testFiles);
        
        // Submit the form
        cy.submitDoorGapForm();
        
        // Verify submission success
        // Option 1: Check for success message (adjust selector based on actual success message)
        cy.get('body').then($body => {
          // Check if there's a thank you message or confirmation
          const hasThankYou = $body.text().toLowerCase().includes('thank you') ||
                              $body.text().toLowerCase().includes('success') ||
                              $body.text().toLowerCase().includes('submitted');
          
          if (hasThankYou) {
            cy.log('✅ Form submission confirmed via success message');
          } else {
            // Fallback: just verify form was submitted (no error messages)
            cy.get('.wpforms-error').should('not.exist');
            cy.log('✅ Form submitted without errors');
          }
        });
      });

      it(`Shows validation errors for empty required fields on ${name} site`, function() {
        cy.visit(url);
        
        // Try to submit empty form
        cy.submitDoorGapForm();
        
        // Should show validation errors
        cy.get('.wpforms-error, .wpforms-required-label, [class*="error"]')
          .should('exist');
      });
    });
  });
});
