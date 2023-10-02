
const LoginPage = require('./../pageobjects/login.page.js')

describe ("Login", function (){

    it ("Login test", async () =>{

        browser.url("https://practicetestautomation.com/practice-test-login/")

        await LoginPage.login("student", "Password123")
        await LoginPage.checkMessage("Logged In Successfully")

        // await $("[name = 'username']").setValue("student")
        // await $("[name = 'password']").setValue("Password123")
        // await $("[id ='submit']").click()
        // await expect ($(".post-title")).toHaveTextContaining("Logged In Successfully")
    })

})