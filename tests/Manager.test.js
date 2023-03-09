const Manager=require("../lib/Manager")
describe("emplyeetest",()=>{
    test ("can set Manager values",() =>{
        const manager=new Manager ("Maggie","123","Maggie@email.com","phone number")
        expect(manager.officenumber).toBe("phone number")
       
    })
    test ("can get employee values",() =>{
        const manager=new Manager ("Maggie","123","Maggie@email.com","phone number")
        expect(manager.getofficenumber()).toBe("phone number")
        
    })
})