import Login from "../PageObjects/LoginPage2"

describe('pom', () => {
     it('LoginTest', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//span[contains(@class,'oxd-topbar-header-breadcrumb')]").should('have.text','Dashboard')
     })

    it.only('LoginTestUsingPOM', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.fixture('orangehrm').then((data)=>{
        const ln = new Login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();
        })
    })
})