describe('here description', () => {
    it('should open google', () => {
      cy.visit("https://www.google.com/")
      cy.get('input[name="q"]').type('remarkablemark{enter}');
      cy.get('#search a')
  .first()
  .invoke('attr', 'href')
  .then(href => console.log(href));
    });
})
