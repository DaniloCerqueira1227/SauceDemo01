// Arquivo: cypress/integration/teste.spec.js

describe('Teste Automatizado no SauceDemo', () => {
    it('Realiza o Login e Adiciona um Produto ao Carrinho', () => {
      // Passo 1: Visita a página de login do SauceDemo
      cy.visit('https://www.saucedemo.com/');
  
      // Passo 2: Preenche o formulário de login com credenciais válidas
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Verificação 1: Confirma se o login foi bem-sucedido redirecionando para a página de inventário
      cy.url().should('include', '/inventory.html');
  
      // Passo 3: Adiciona um produto ao carrinho clicando no botão correspondente
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').first().click();
  
      // Verificação 2: Confirma se o produto foi adicionado ao carrinho
      cy.get('.shopping_cart_badge').should('contain', '1');
  
      // Ação 1: Clica no ícone do carrinho para acessar o carrinho de compras
      cy.get('.shopping_cart_link').click();
  
      // Ação 2: Inicia o processo de checkout clicando no botão "Checkout"
      cy.get('[data-test="checkout"]').click();
  
      // Ação 3: Preenche informações de entrega no formulário
      cy.get('[data-test="firstName"]').type('Danilo');
      cy.get('[data-test="lastName"]').type('Holanda');
      cy.get('[data-test="postalCode"]').type('06803-440');
  
      // Ação 4: Continua o processo de checkout
      cy.get('[data-test="continue"]').click();
  
      // Ação 5: Finaliza a compra clicando no botão "Finish"
      cy.get('[data-test="finish"]').click();
  
      // Ação 6: Retorna para a página de produtos clicando no botão "Back to Products"
      cy.get('[data-test="back-to-products"]').click();
    });
  });
  

  