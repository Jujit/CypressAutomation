describe("Asserstions demo", ()=> {

    it("Implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //should     and

        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')
    })

    it("explicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()

        let expName="anu PV";

        cy.xpath("//p[@class='oxd-userdropdown-name']").then( (x)=>{
            let actName=x.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            assert.equal(actName,expName)
            assert.notEqual(actName, expName)
        } )

    })

})