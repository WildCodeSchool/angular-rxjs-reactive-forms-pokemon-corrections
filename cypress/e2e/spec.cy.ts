describe('Home page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Liste des pokemons :')
  })


  it('Shows some well known pokemons', () => {
    cy.visit('/')
    cy.contains('Magmar')
    cy.contains('Charmander')
    cy.contains('Carnivine')
    cy.contains('Togekiss')
  })
})

describe('Add a pokemon', () => {
  it('Should add new pokemon to list', () => {
    cy.visit('/')

    const imageUrl = 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg';
    cy.get('[formcontrolname="name"]').type('MY NEW POKEMON');
    cy.get('[formcontrolname="imageUrl"]').type(imageUrl);
    cy.get('[formcontrolname="supertype"]').type('custom');
    cy.get('form [type="submit"]').click();

    cy.get('[src="' + imageUrl + '"]').should('exist');
    cy.contains('MY NEW POKEMON')
  })
})
