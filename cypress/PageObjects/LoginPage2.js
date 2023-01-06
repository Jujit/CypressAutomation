class Login{

    txtUserName="//input[@name='username']";
    txtPassword="//input[@name='password']";
    btnSubmit="//button[@type='submit']";
    lblmsg="//span[contains(@class,'oxd-topbar-header-breadcrumb')]";



    setUserName(username){
        cy.xpath(this.txtUserName).type(username)
    }

    setPassword(password){
        cy.xpath(this.txtPassword).type(password)
    }

    clickSubmit(){
        cy.xpath(this.btnSubmit).click()
    }

    verifyLogin(){
        cy.xpath(this.lblmsg).should('have.text','Dashboard')
    }
}

export default Login;