class Login{

    setUserName(username){
        cy.xpath("//input[@name='username']").type(username)
    }

    setPassword(password){
        cy.xpath("//input[@name='password']").type(password)
    }

    clickSubmit(){
        cy.xpath("//button[@type='submit']").click()
    }

    verifyLogin(){
        cy.xpath("//span[contains(@class,'oxd-topbar-header-breadcrumb')]").should('have.text','Dashboard')
    }
}

export default Login;