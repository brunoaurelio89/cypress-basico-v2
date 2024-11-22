/// <reference types="Cypress" />

import inputData from "../support/functions"

describe('Central de Atendimento ao Cliente TAT - Básico', ()=> {

    context.skip('Lessons 2', ()=>{
        beforeEach(()=> {
            cy.visit('./cypress-basico-v2/src/index.html')
        })

        it('verifica o título da aplicação',()=>{
            cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        })

        it('Ex.0 | Ex. Extra 01 - preenche os campos obrigatórios e envia o formulário | adiciona no bloco validação do delay = 0 ',()=>{
            cy.get('#firstName').type('Bruno')
            cy.get('#lastName').type('Aurelio')
            cy.get('#email').type('bruno.aurelio@email.com')
            // delay = faz com que o tempo de execução quando tem muitos caracteres a serem digitados seja mais rápido, por default o delay = 10
            // utilização da função wordRandom para digitar um texto de 100 caracteres
            // Lessons 02.md - Ex. Extra 01
            cy.get('#open-text-area').type(inputData.wordRandom(100), {delay:0})
            cy.get('button[type="submit"]').click()
            cy.get('.success').should('be.visible')
        })

        it('Ex. Extra 02 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',()=>{
            cy.get('#firstName').type('Bruno')
            cy.get('#lastName').type('Aurelio')
            cy.get('#email').type('bruno.aurelio@.com')
            cy.get('#open-text-area').type(inputData.wordRandom(100), {delay:0})
            cy.get('button[type="submit"]').click()
            cy.get('.error').should('be.visible').contains('Valide os campos obrigatórios!')
        })

        it('Ex. Extra 03 - validação do campo telefone apenas numerico',()=>{
            cy.get('#phone').type(inputData.repeatWord(2)).should('have.value','')
        })    

        it('Ex. Extra 04 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
            cy.get('#phone-checkbox').click()
            cy.get('#firstName').type('Bruno')
            cy.get('#lastName').type('Aurelio')
            cy.get('#email').type('bruno.aurelio@.com')
            cy.get('#open-text-area').type(inputData.wordRandom(100), {delay:0})
            cy.get('button[type="submit"]').click()
            cy.get('.error').should('be.visible').contains('Valide os campos obrigatórios!')
        });

        it('Ex. Extra 05 - preenche e limpa os campos nome, sobrenome, email e telefone', () => {
            cy.get('#firstName').type('Bruno').should('have.value','Bruno').clear().should('have.value', '')
            cy.get('#lastName').type('Aurelio').should('have.value','Aurelio').clear().should('have.value', '')
            cy.get('#email').type('bruno.aurelio@email.com').should('have.value','bruno.aurelio@email.com').clear().should('have.value', '')
            cy.get('#phone').type('16999974524').should('have.value','16999974524').clear().should('have.value', '')
        });

        it('Ex. Extra 06 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
            cy.get('button[type="submit"]').click()
            cy.get('.error').should('be.visible').contains('Valide os campos obrigatórios!')
        });

        it('Ex. Extra 07 - envia o formuário com sucesso usando um comando customizado', () => {
            cy.fillMandatoryFieldsAndSubmit()
            cy.get('.success').should('be.visible')
        });    

        it('Ex. Extra 08 - Alterando de cy.get para cy.contains', () => {
            cy.get('#firstName').type('Bruno')
            cy.get('#lastName').type('Aurelio')
            cy.get('#email').type('bruno.aurelio@email.com')
            cy.get('#open-text-area').type(inputData.wordRandom(100), {delay:0})
            cy.contains('button','Enviar').click() // Alterado somente esse item para exemplificar o Ex. 08
            cy.get('.success').should('be.visible')
        });
        
    })

    context.skip('Lessons 3 - Seleção do tipo Select (Dropbox)',()=>{
        beforeEach(()=> {
            cy.visit('./cypress-basico-v2/src/index.html')
        })

        it('Ex. 0 - Seleciona um produto (YouTube) por seu texto', () => {
            cy.get('#product')
                .select('YouTube')
                .should('have.value','youtube')
        });

        it('Ex. Extra 01 - Seleciona um produto (Mentoria) por seu valor (value)', () => {
            cy.get('#product')
                .select('mentoria')
                .should('have.value','mentoria')
        });

        it('Ex. Extra 02 - Seleciona um produto (Blog) por seu índice', () => {
            cy.get('#product')
                .select(1)
                .should('have.value','blog')
        });
        
    })

    context.skip('Lessons 4 - Seleção do tipo Radio',()=>{
        beforeEach(()=> {
            cy.visit('./cypress-basico-v2/src/index.html')
        })

        it('Ex. - Marca o tipo de atendimento "Feedback', () => {
            cy.get('input[type=radio][value="feedback"]')
                .check()
                .should('have.value','feedback')
        });

        it('Ex. Extra - Marca cada tipo de atendimento', () => {
            cy.get('input[type=radio]')
                .should('have.length',3) //verifica se a quantidade de check na páginma = 3
                .each(($radio)=>{
                    cy.wrap($radio).check() // faz a marcação para cada um
                    cy.wrap($radio).should('be.checked') // verifica cada um se foi realmente marcado
                })
        });
    })

    context('Lessons 5 - Marcar e desmarcar um checkbox', () => {
        beforeEach(()=> {
            cy.visit('./cypress-basico-v2/src/index.html')
        })

        it('Ex. 0 - Marca ambos checkboxes, depois desmarca o último', () => {
            cy.get('input[type=checkbox]')
                .check() //marca de forma automática ambos os checkbox, não necessita de selecionar cada um para ser marcado
                .last()
                .uncheck()
                .should('not.be.checked')
        });

        it('Ex. 1 - Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
            
        });

        it('Ex. 0 - Marca ambos checkboxes, depois desmarca o último', () => {
            cy.get('input[type=checkbox][name="email"]').check().should('be.checked')

        });
    });
  })