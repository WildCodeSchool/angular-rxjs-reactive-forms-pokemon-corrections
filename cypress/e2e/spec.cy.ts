describe('Home page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Liste des noms :')
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

    

    cy.contains('Togekiss')
  })
})
