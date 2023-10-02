
describe.skip("Demo test", function () {

    it("1st test", async () => {
        browser.url("https://google.com")
        await $("[name='q']").setValue("New Year ")
        // await $("[name='btnK']").click()
        browser.keys("Enter")
        browser.pause(2000)
    })
})