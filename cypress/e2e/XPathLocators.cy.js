describe('XPathLocators', () =>{
   
    it('find number of products', () =>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.xpath("//div[contains(@class,'product-item-info')]").should('have.length',6)
    })
})